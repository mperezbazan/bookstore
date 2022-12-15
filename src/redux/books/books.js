const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

const initialBooks = [
  {
    id: '1',
    title: "Harry Potter and the Philosopher's Stone",
    author: 'J. K. Rowling',
  },
  {
    id: '2',
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J. K. Rowling',
  },
  {
    id: '3',
    title: 'Harry Potter and the Prisoner of Azkaban',
    author: 'J. K. Rowling',
  },
  {
    id: '4',
    title: 'Harry Potter and the Goblet of Fire',
    author: 'J. K. Rowling',
  },
  {
    id: '5',
    title: 'Harry Potter and the Order of the Phoenix',
    author: 'J. K. Rowling',
  },
  {
    id: '6',
    title: 'Harry Potter and the Half-Blood Prince',
    author: 'J. K. Rowling',
  },
  {
    id: '7',
    title: 'Harry Potter and the Deathly Hallows',
    author: 'J. K. Rowling',
  },
];

export default function reducer(state = initialBooks, action) {
  switch (action.type) {
    case ADD:
      return [...state, action.book];
    case REMOVE:
      return state.filter((book) => book.id !== action.book);
    default: return state;
  }
}

export const addBook = (book) => ({
  type: ADD,
  book,
});

export const removeBook = (book) => ({
  type: REMOVE,
  book,
});
