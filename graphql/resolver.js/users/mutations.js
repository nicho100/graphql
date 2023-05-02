const { addUser } = require("../../../controller/user");

module.exports.userMutations = {//traigo la funcion para añadir un usuario
  addUser: async (_, { userToAdd }) => await addUser(userToAdd),
};
