const fs = require('fs');
const json = require('../server/flight-aware.schema.json');

let interfaceCode = '';
let functionsCode = 'import * as rp from \'request-promise\';\n\n' +
    'const username = \'HodBauer\';\n' +
    'const apiKey = \'402a9d36507f014a110c668befb9d8e363f76546\';\n' +
    'const fxmlUrl = `https://${username}:${apiKey}@flightxml.flightaware.com/json/FlightXML3/`;\n' +
    '\n' +
    'let base = {\n' +
    '    uri: \'\',\n' +
    '    qs: {},\n' +
    '    json: true\n' +
    '};\n';

const types = arrayToObject(json.types, 'name', /^FlightXML3:(.*)/);
const operations = arrayToObject(json.operations, 'name');

let schemaCode = 'import {buildSchema} from \'graphql\';\n\n' +
    'export const schema = buildSchema(`\n';
let queryCode = 'type FlightAware {\n';
for (let key of Object.keys(operations)) {
    let operation = operations[key];

    interfaceCode += createInterfaces(operation.inputs, 'name', key);
    functionsCode += createFunctions(operation, types[key + 'Results'].fields[0]);
    let x = createSchemaType(operation);
    schemaCode += x.type;
    queryCode += x.query;
}
queryCode += `}\n\ntype Query {\n    flightAware:FlightAware\n}`
schemaCode += queryCode + '`);\n';

for (let key of Object.keys(types)) {
    let type = types[key];
    interfaceCode += createInterfaces(type.fields, 'field', key);
}


fs.writeFile('./src/flight-aware.interface.ts', interfaceCode);
fs.writeFile('./src/flight-aware.api.ts', functionsCode);
fs.writeFile('./src/flight-aware.schema.ts', schemaCode);

function createInterfaces(inputs, key, name) {
    let result = `export interface ${name} {\n`;
    for (let input of inputs) {
        result += `  ${input[key]}`;
        if (input.type.includes('?')) {
            result += '?';
        }
        result += `:${parseInterfaceType(input.type)};\n`;
    }
    result += `}\n\n`;

    return result;
}

function parseInterfaceType(type) {
    let isArray = false;
    let result = type;
    if (type.match(/\?$/)) {
        result = type.substr(0, type.length - 1);
    }
    if (result.match(/\(\)$/)) {
        result = result.substr(0, result.length - 2);
        isArray = true;
    }

    if (result === 'int' || result === 'float') {
        result = 'number';
    }
    return result + (isArray ? '[]' : '');
}

function createFunctions(input, resultType) {
    const name = input.name;
    const type = resultType.type === 'int' ? 'number' : resultType.type;
    let result = `export async function ${name}(qs:${name}):Promise<${type}> {\n`;
    result += `    base.uri = fxmlUrl + '${name}';\n`;
    result += `    base.qs = qs;\n`;
    result += `    return (await rp.get(base)).${resultType.field};\n`;
    result += `}\n\n`;

    return result;
}

function createSchemaType(operation) {
    let structure = getStructure(operation.returns.type);

    let query = `    ${operation.name}(`;
    query += operation.inputs.map(input => `${input.name}:${parseSchemaType(input.type)}`).join(', ');
    query += `):${getStructureName(operation.returns.type)}\n`;

    let type = '';
    if (getStructureName(operation.returns.type) !== 'Int') {
        type = `type ${getStructureName(operation.returns.type)} {\n`;
        type += structure.fields.map(field => `    ${field.field}:${parseSchemaType(field.type)}`).join('\n');
        type += `}\n\n`;
    }

    return {query, type};
}

function parseSchemaType(type) {
    let isArray = false;
    let isMandatory = true;
    let result = type;
    if (type.match(/\?$/)) {
        result = type.substr(0, type.length - 1);
        isMandatory = false;
    }
    if (result.match(/\(\)$/)) {
        result = result.substr(0, result.length - 2);
        isArray = true;
    }

    result = result.charAt(0).toUpperCase() + result.substr(1);

    return (isArray ? '[' : '') + result + (isArray ? ']' : '') + (isMandatory ? '!' : '');
}

function getStructure(type) {
    return type === 'int' ? 'Int' : types[type];
}

function getStructureName(type) {
    return type === 'int' ? 'Int' : type;
}


//convert array of objects to mapped object by field
function arrayToObject(object, field, reg) {
    let result = {};

    for (let entity of object) {
        let key = entity[field];
        if (reg) {
            key = key.match(reg)[1];
        }
        result[key] = entity;
    }

    return result;
}