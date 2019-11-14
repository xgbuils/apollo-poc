const { ApolloServer } = require('apollo-server');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const BooksAPI = require('./datasources/books');


// set up any dataSources our resolvers need
const dataSources = () => ({
  booksAPI: new BooksAPI(),
});


// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
});

// Start our server if we're not in a test env.
// if we're in a test env, we'll manually start it in a test
if (process.env.NODE_ENV !== 'test')
  server
    .listen({ port: 4000 })
    .then(({ url }) => console.log(`🚀 app running at ${url}`));

// export all the important pieces for integration/e2e tests to use
module.exports = {
  dataSources,
  typeDefs,
  resolvers,
  server,
};
