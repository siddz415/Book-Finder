const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Book {
    bookId: ID!
    authors: [String]
    title: String
    link: String
    description: String
    image: String
  }

  input InputBook {
    bookId: String
    authors: [String]
    image: String
    description: String
    title: String
    link: String
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(newBook: InputBook!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;