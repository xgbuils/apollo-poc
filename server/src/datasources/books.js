const { RESTDataSource } = require('apollo-datasource-rest');

class ResultsAPI extends RESTDataSource {
  constructor() {
    super();
  }

  getResults() {
    return [{
      id: 1,
      name: 'Nineteen Eighty-Four',
      published: 1949,
      author: {
        id: 1,
        name: 'George Orwell'
      }
    }, {
      id: 2,
      name: 'Around the world in eighty days',
      published: 1873,
      author: {
        id: 2,
        name: 'Jules Verne'
      }
    }, {
      id: 3,
      name: 'Animal Farm',
      published: 1945,
      author: {
        id: 1,
        name: 'George Orwell'
      }
    }, {
      id: 4,
      name: 'From the Earth to the Moon',
      published: 1865,
      author: {
        id: 2,
        name: 'Jules Verne'
      }
    }, {
      id: 5,
      name: 'Homage to Catalonia',
      published: 1945,
      author: {
        id: 1,
        name: 'George Orwell'
      }
    }, {
      id: 6,
      name: 'Journey to the Center of the Earth',
      published: 1864,
      author: {
        id: 2,
        name: 'Jules Verne'
      }
    }]
  }
}

module.exports = ResultsAPI;
