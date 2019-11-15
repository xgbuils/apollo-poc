import {Ende, Orwell, Tolkien} from "./authors";

export const TheLordOfTheRings = () => ({
  id: 1,
  name: 'The Lord of the Rings',
  published: 1954,
  author: Tolkien()
});

export const Momo = () => ({
  id: 1,
  name: 'Momo',
  published: 1973,
  author: Ende()
});

export const TheHobbit = () => ({
  id: 1,
  name: 'The Hobbit',
  published: 1954,
  author: Tolkien()
})

export const TheNeverendingStory = () => ({
  id: 1,
  name: 'The Neverending Story',
  published: 1979,
  author: Ende()
});


export const NineteenEightyFour = () => ({
  id: 1,
  name: 'Nineteen Eighty-Four',
  published: 1949,
  author: Orwell()
});

export const AnimalFarm = () => ({
  id: 3,
  name: 'Animal Farm',
  published: 1945,
  author: Orwell()
});
