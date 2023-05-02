const { userMutations } = require("./user/mutations");
const { userQueries } = require("./user/queries");

module.exports.resolvers = {//traigo las mutaciones y las queris para ser exportadas al server
  Query: {
    ...userQueries,
  },

  Mutation: {
    ...userMutations,
  },
};
