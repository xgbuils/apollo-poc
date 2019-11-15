import React from 'react';
import { InMemoryCache } from 'apollo-cache-inmemory';

import {
  cleanup, render,
  wait,
} from '@testing-library/react';
import Authors, { GET_AUTHORS } from '../Authors';
import {
  AnimalFarm,
  Momo,
  NineteenEightyFour,
  TheHobbit,
  TheLordOfTheRings,
  TheNeverendingStory
} from "../__mocks__/books";
import {Ende, Orwell, Tolkien} from "../__mocks__/authors";
import {resolvers} from "../../resolvers";
import {MockedProvider} from "@apollo/react-testing";
import Books from "../Books";

const BooksMock = () => [
  TheLordOfTheRings(),
  AnimalFarm(),
  Momo(),
  NineteenEightyFour(),
  TheHobbit(),
  TheNeverendingStory()
];

describe('Books', () => {
  afterEach(cleanup);

  it('renders books', async () => {
    const cache = new InMemoryCache({ addTypename: false });
    const books = BooksMock();
    const mocks = [
      {
        request: { query: GET_AUTHORS },
        result: {
          data: {
            books,
          },
        },
      },
    ];
    const { container } = await render(
      <MockedProvider
        mocks={mocks}
        cache={cache}
        resolvers={resolvers}
      >
        <Authors/>
      </MockedProvider>
    );
    await wait(() => expect(container.textContent).toContain(Orwell().name));
    await wait(() => expect(container.textContent).toContain(Tolkien().name));
    await wait(() => expect(container.textContent).toContain(Ende().name));
  });
});
