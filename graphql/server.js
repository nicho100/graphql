const { ApolloServer } = require('@apollo/server');
const { typeDefs } = require('./typeDefs');
const { resolvers } = require('./resolvers');

module.exports.serverql = new ApolloServer({//creo el server con los resolvers y los tipos.
  typeDefs,
  resolvers,
});
