import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';
import {root} from './root';
import {schema} from './flight-aware.schema';

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

console.log('http://localhost:4000/graphql');
app.listen(4000);