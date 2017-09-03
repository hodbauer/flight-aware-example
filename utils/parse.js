const fs = require('fs');
const json = require('../server/flight-aware.schema.json');

let interfaceCode = '';
let functionsCode = 'import * as rp from \'request-promise\';\n\n' +
    'let base = {\n' +
    '    uri: \'\',\n' +
    '    qs: {},\n' +
    '    json: true\n' +
    '};\n';

const types = arrayToObject(json.types, 'name', /^FlightXML3:(.*)/);
const operations = arrayToObject(json.operations, 'name');
let schemaTypes = {};
let schemaCode = 'import {buildSchema} from \'graphql\';\n\n' +
    'export const schema = buildSchema(`\n';
let queryCode = 'type FlightAware {\n';
for (let key of Object.keys(operations)) {
    let operation = operations[key];

    interfaceCode += createInterfaces(operation.inputs, 'name', key);
    functionsCode += createFunctions(operation, types[key + 'Results'].fields[0]);
    let x = createSchemaType(operation, operation.returns.type);
    const operationType = operation.returns.type;
    let structureName = getStructureName(operationType);
    schemaTypes[structureName] = x.type;
    queryCode += x.query;
}

for (let key of Object.keys(types)) {
    let type = types[key];
    interfaceCode += createInterfaces(type.fields, 'field', key);
    let x = createSchemaType(type, key);
    schemaTypes[key] = x.type;
}

for (let key of Object.keys(schemaTypes).sort()) {
    schemaCode += schemaTypes[key];
}
queryCode += `}\n\ntype Query {\n    flightAware:FlightAware\n}`;
schemaCode += queryCode + '`);\n';

fs.writeFile('./server/flight-aware.interface.ts', interfaceCode);
fs.writeFile('./server/flight-aware.api.ts', functionsCode);
fs.writeFile('./server/flight-aware.schema.ts', schemaCode);

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

function createSchemaType(operation, operationType) {
    let structure = getStructure(operationType);
    let structureName = getStructureName(operationType);

    let query = '';
    if (operation.inputs) {
        query += `    ${operation.name}`;
        if (operation.inputs.length) {
            query += `(`;
            query += operation.inputs.map(input => `${input.name}:${parseSchemaType(input.type)}`).join(', ');
            query += `)`;
        }
        query += `:${structureName}\n`;
    }

    let type = '';
    if (structureName !== 'Int' && structure.fields.length) {
        type = `type ${structureName} {\n`;
        type += structure.fields.map(field => `    ${field.field}:${parseSchemaType(field.type)}`).join('\n');
        type += `\n}\n\n`;
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