import gql from 'graphql-tag';
import {GET_BOOKS} from "./components/Books";

export const typeDefs = gql`
  extend type Query {
    authors: [Author]
    filterOrwellBooks: [Book]
  }
`;

const getAuthors = (books) => {
  return books.reduce((authors, {author}) => {
      return authors.set(author.id, author);
  }, new Map());
};

const filterOrwellBooks = (books) => {
  return books.filter(({author}) => {
    return author.id === 1;
  })
};

export const resolvers = {
  Query: {
    authors: async (_, __, { client }) => {
      const {data} = await client.query({query: GET_BOOKS});
      return [...getAuthors(data.books)].map(([, author]) => author);
    },
    filterOrwellBooks: async (_, __, { client }) => {
      const {data} = await client.query({query: GET_BOOKS});
      return filterOrwellBooks(data.books);
    }
  },
};
