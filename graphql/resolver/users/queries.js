const { getUsers, getById } = require("../../../controller/user");
const { ContenedorArchivo } = require('../../../controller/contenedorArchivos')
const usuario= new ContenedorArchivo("productos")
module.exports.userQueries = {
  users: async () => await usuario.getAll(),
  user: async (_, { userId }) => await usuario.getbyid(userId),
};
