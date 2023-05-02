module.exports.typeDefs = `#graphql
  type User {
    id: ID!
    username: String!
    password: String!
  }
  input UserToAdd {
    username: String!
    password: String!
  }
  type Query {
    users: [User]!
    user(userId: ID!): User!
  }
  type Mutation {
    addUser(userToAdd: UserToAdd!): User!
  }
`;
