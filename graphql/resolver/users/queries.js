const { getUsers, getById } = require("../../../controller/user");

module.exports.userQueries = {
  users: async () => await getUsers(),
  user: async (_, { userId }) => await getById(userId),
};