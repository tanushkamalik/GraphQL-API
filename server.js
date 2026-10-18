const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { graphqlHTTP } = require('express-graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema');

// Load schema
const typeDefs = fs.readFileSync('./schema.graphql', {
  encoding: 'utf-8'
});

// Load resolvers
const resolvers = require('./resolvers');

// Build schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const app = express();
const port = process.env.PORT || 9000;

app.use(cors());
app.use(bodyParser.json());

// GraphQL endpoint
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

// Start server
app.listen(port, () => {
  console.log(`GraphQL Server running at http://localhost:${port}/graphql`);
});
