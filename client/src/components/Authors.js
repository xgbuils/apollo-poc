import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import ShowDataComponent from "./ShowDataComponent";

export const GET_AUTHORS = gql`
  query GetAuthors {
    authors @client {
      id
      name
    }
  }
`;

export default function Authors() {
  const { data, loading, error } = useQuery(GET_AUTHORS);
  if (loading) return <div>Loading ...</div>;
  if (error) return <ShowDataComponent label="Authors" data={error}/>;

  return <ShowDataComponent label="Authors" data={data}/>
}
