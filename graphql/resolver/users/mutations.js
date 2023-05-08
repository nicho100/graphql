const { addUser } = require("../../../controller/user");
const { ContenedorArchivo } = require('../../../controller/contenedorArchivos')
const usuario= new ContenedorArchivo("usuarios")
module.exports.userMutations = {
  addUser: async (_, { userToAdd }) => await usuario.save(userToAdd),
};
