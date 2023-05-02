module.exports.typeDefs = `#graphql
  type User {//creo el tipo usuario que contiene un id,username y contraseña
    id: ID!
    username: String!
    password: String!
  }
  input UserToAdd {//creo un input para despues insertarlo en la mutacion
    username: String!
    password: String!
  }
  type Query {//muestra un usuario cuando se ingrese el id
    users: [User]!
    user(userId: ID!): User!
  }
  type Mutation {//recibo el contenido de userToAdd y lo añado
    addUser(userToAdd: UserToAdd!): User!
  }
`;
