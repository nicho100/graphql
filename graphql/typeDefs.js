module.exports.typeDefs = `#graphql
  type User {//creo el tipo usuario que contiene un id,username y contraseña
    id: ID!
    username: String!
    password: String!
  }
  input UserToAdd {//creo un input para añadir un usuario
    username: String!
    password: String!
  }
  type Query {//muestra un usuario cuando se ingrese el id
    users: [User]!
    user(userId: ID!): User!
  }
  type Mutation {
    addUser(userToAdd: UserToAdd!): User!
  }
`;
