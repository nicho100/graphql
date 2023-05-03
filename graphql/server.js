const { ApolloServer } = require('@apollo/server');
const { typeDefs } = require('./typeDefs');
const { resolvers } = require('./resolvers/index');

module.exports.serverql = new ApolloServer({//creo el server con los resolvers y los tipos para ser exportados al servidor principal.
  typeDefs,
  resolvers,
});
