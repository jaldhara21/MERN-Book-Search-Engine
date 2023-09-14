import { gql } from "@apollo/client";

// Define a GraphQL query to retrieve user information
export const GET_ME = gql`
  {
    me {
        _id         // User's unique ID
        username    // User's username
        email       // User's email
        bookCount   // Number of books associated with the user
        savedBooks { // List of saved books, each with the following attributes
          bookId     // Unique ID of the saved book
          authors    // Authors of the book
          description // Description of the book
          title      // Title of the book
          image      // URL to the book's image
          link       // URL to more information about the book
      }
    }
  }
`;
