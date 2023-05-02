const { getUsers, getById } = require("../../../controller/user");

module.exports.userQueries = {//creo la queri pra recibir todos los usuarios y para recibir uno solo cuando recibe un id
  users: async () => await getUsers(),
  user: async (_, { userId }) => await getById(userId),
};
