import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import ShowDataComponent from "./ShowDataComponent";

export const GET_ORWELL_BOOKS = gql`
  query GetOrwellBooks {
    filterOrwellBooks @client {
      id
      name
    }
  }
`;

export default function OrwellBooks() {
  const { data, loading, error } = useQuery(GET_ORWELL_BOOKS);
  if (loading) return <div>Loading ...</div>;
  if (error) return <ShowDataComponent label="George Orwell Books" data={error}/>;

  return <ShowDataComponent label="George Orwell Books" data={data}/>
}
