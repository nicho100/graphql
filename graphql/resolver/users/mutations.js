const { addUser } = require("../../../controller/user");

module.exports.userMutations = {
  addUser: async (_, { userToAdd }) => await addUser(userToAdd),
};