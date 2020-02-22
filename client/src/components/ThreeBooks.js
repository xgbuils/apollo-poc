import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import ShowDataComponent from "./ShowDataComponent";

export const GET_PAGINATED_BOOKS = gql`
  query GetBooks($items: String!) {
    paginatedBooks(items: $items) @client {
      id
      label @client
      author {
        id
        fullName @client
      }
    }
  }
`;

export default function ThreeBooks() {
  const { data, loading, error } = useQuery(GET_PAGINATED_BOOKS, {
    variables: {items: 3}
  });
  if (loading) return <div>Loading...</div>;
  if (error) return <ShowDataComponent label="Books" data={error}/>;

  return <ShowDataComponent label="Books" data={data}/>
}
