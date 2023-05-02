const { ApolloServer } = require('@apollo/server');
const { typeDefs } = require('./typeDefs');
const { resolvers } = require('./resolvers');

module.exports.serverql = new ApolloServer({
  typeDefs,
  resolvers,
});