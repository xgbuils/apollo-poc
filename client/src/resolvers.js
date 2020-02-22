import gql from 'graphql-tag';

export const typeDefs = gql`
  extend type Query {
    paginatedBooks(items: Int!): [Book]
  }

  extend type Book {
    label: String
  }

  extend type Author {
    fullName: String
  }
`;

const GET_BOOKS = gql`
  query GetBooks {
    books {
      id
      name
      published
      author {
        id
        name
        lastName
      }
    }
  }
`;

export const resolvers = {
  Query: {
    paginatedBooks: async (_, {items}, {client}) => {
      const {data} = await client.query({query: GET_BOOKS});
      return data.books.slice(0 , items);
    }
  },
  Book: {
    label: (book) => {
      return book.name + ', ' + book.published
    },
  },
  Author: {
    fullName: (author) => {
      return author.name + ' ' + author.lastName
    },
  },
};
