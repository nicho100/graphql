const { userMutations } = require("./users/mutations");
const { userQueries } = require("./users/queries");

module.exports.resolvers = {
  Query: {
    ...userQueries,
  },

  Mutation: {
    ...userMutations,
  },
};
