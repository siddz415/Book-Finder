const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedNooks: [Book]
  }

  type Book {
    bookid: ID
    authors: [String]
    description: String
    title: String
    link: String
    image: String
  }

  input InputBook {
    bookid: String
    authors: [String]
    description: String
    title: String
    link: String
    image: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removeBook(bookId: ID!): User
    saveBook(newBook: InputBook!): User
    
  }
`;

module.exports = typeDefs;