const express = require('express');
const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');

const schema = buildSchema(`
    type Query {
        message: String
    }
`);

let root = {
    message: () => 'Hello World!'
};

const app = express();
app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        graphiql: true,
    }),
);
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));

