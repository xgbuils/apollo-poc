import React from 'react';
import { InMemoryCache } from 'apollo-cache-inmemory';

import {
  cleanup,
  wait,
} from '@testing-library/react';
import {renderApollo} from '../../test-utils';
import Launches, { GET_BOOKS } from '../Books';

const Ende = () => ({
  id: 1,
  name: 'Michael Ende'
});

const Tolkien = () => ({
  id: 2,
  name: 'John Ronald Reuel Tolkien'
});

const BooksTest = () => [{
  id: 1,
  name: 'The Lord of the Rings',
  published: 1954,
  author: Tolkien()
}, {
  id: 1,
  name: 'Momo',
  published: 1973,
  author: Ende()
}, {
  id: 1,
  name: 'The Hobbit',
  published: 1954,
  author: Tolkien()
}, {
  id: 1,
  name: 'The Neverending Story',
  published: 1979,
  author: Ende()
}];

describe('Books', () => {
  afterEach(cleanup);

  it('renders books', async () => {
    const cache = new InMemoryCache({ addTypename: false });
    const books = BooksTest();
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
    const { container } = await renderApollo(<Launches />, {
      mocks,
      cache,
    });
    await wait(() => expect(container.textContent).toContain(books[0].name));
    await wait(() => expect(container.textContent).toContain(books[1].name));
    await wait(() => expect(container.textContent).toContain(books[2].name));
    await wait(() => expect(container.textContent).toContain(books[3].name));
  });
});
