import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser( $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        email
        username
        bookCount
        savedBooks {
          authors
          link
          title
          bookId
          image
          description
        }
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login( $email: String!
    $password: String!
  ) {
    login(
      email: $email
      password: $password
    ) {
      token
      user {
        username
        _id
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($newBook: InputBook!) {
    saveBook(newBook: $newBook) {
      _id
      email
      username
      savedBooks {
        bookId
        authors
        title
        link
        description
        image
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      email
      username
      savedBooks {
        bookId
        authors
        link
        title
        description
        image
      }
    }
  }
`;