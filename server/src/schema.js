const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    books: [Book]
  }
  
  type Book {
    id: Int
    name: String
    published: Int
    author: Author
  }
  
  type Author {
    id: Int
    name: String
  }
 `;

module.exports = typeDefs;
