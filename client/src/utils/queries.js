import { gql } from '@apollo/client';

export const GET_ME = gql`
{
    me {
      _id
      username
      bookCount
      email
      savedBooks {
        bookId
        description
        title
        image
        link
        authors
      }
    }
  }`;