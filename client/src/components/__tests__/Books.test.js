import React from 'react';
import { InMemoryCache } from 'apollo-cache-inmemory';

import {
  cleanup,
  wait,
  render
} from '@testing-library/react';
import Books, { GET_BOOKS } from '../Books';
import {
  AnimalFarm,
  Momo,
  NineteenEightyFour,
  TheHobbit,
  TheLordOfTheRings,
  TheNeverendingStory
} from "../__mocks__/books";
import {Ende, Orwell, Tolkien} from "../__mocks__/authors";
import {MockedProvider} from "@apollo/react-testing";

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
        request: { query: GET_BOOKS },
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
      >
        <Books/>
      </MockedProvider>
    );

    await wait(() => expect(container.textContent).toContain(TheLordOfTheRings().name));
    await wait(() => expect(container.textContent).toContain(AnimalFarm().name));
    await wait(() => expect(container.textContent).toContain(Momo().name));
    await wait(() => expect(container.textContent).toContain(NineteenEightyFour().name));
    await wait(() => expect(container.textContent).toContain(TheHobbit().name));
    await wait(() => expect(container.textContent).toContain(TheNeverendingStory().name));
    await wait(() => expect(container.textContent).toContain(Orwell().name));
    await wait(() => expect(container.textContent).toContain(Tolkien().name));
    await wait(() => expect(container.textContent).toContain(Ende().name));
  });
});
