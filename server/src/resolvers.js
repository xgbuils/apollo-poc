module.exports = {
  Query: {
    books: (_, __,  { dataSources }) => {
      return dataSources.booksAPI.getResults();
    }
  },
};
