import { gql } from '@apollo/client';

export const GET_ME = gql`
{
    me {
      _id
      username
      bookCount
      email
      savedBooks {
        description
        bookId
        link
        title
        image
        authors
      }
    }
  }`;