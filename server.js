const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { readFileSync } = require('fs');
const { join } = require('path');
const resolvers = require('./resolvers');

const typeDefs = readFileSync(join(__dirname, 'schema.graphql'), 'utf8');
const schema = makeExecutableSchema({ typeDefs, resolvers });

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/graphql`);
});
