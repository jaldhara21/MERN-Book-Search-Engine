import { gql } from "@apollo/client";

// Define a GraphQL query to retrieve user information
export const GET_ME = gql`
  {
    me {
        _id         
        username    
        email       
        bookCount   
        savedBooks { 
          bookId     
          authors    
          description 
          title      
          image      
          link       
      }
    }
  }
`;
