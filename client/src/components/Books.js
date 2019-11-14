import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import ShowDataComponent from "./ShowDataComponent";

export const GET_BOOKS = gql`
  query GetBooks {
    books {
      id
      name
      published
      author {
        id
        name
      }
    }
  }
`;

export default function Books() {
  const { data, loading, error } = useQuery(GET_BOOKS);
  if (loading) return <div>Loading...</div>;
  if (error) return <ShowDataComponent label="Books" data={error}/>;

  return <ShowDataComponent label="Books" data={data}/>
}
