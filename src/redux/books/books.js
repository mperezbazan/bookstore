import { createAsyncThunk } from '@reduxjs/toolkit';
import bookService from '../../services/BookService';

const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';
const GET = 'bookstore/books/GET';
const GET_FULFILLED = 'bookstore/books/GET/fulfilled';

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD:
      return [...state, action.book];
    case REMOVE:
      return state.filter((book) => book.item_id !== action.book);
    case GET_FULFILLED:
      return [...action.payload];
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

export const getBooks = (payload) => ({
  type: GET,
  payload,
});

export const getBooksAPI = createAsyncThunk(
  GET,
  async (_, thunkAPI) => {
    const res = await bookService.getAll();
    await thunkAPI.dispatch(getBooks(res.data));
    const parsedData = Object.keys(res.data).map((key) => {
      const { title, author, category } = res.data[key][0];
      return {
        item_id: key,
        title,
        author,
        category,
      };
    });
    return parsedData;
  },
);

export const addBookAPI = createAsyncThunk(
  ADD,
  async (book, thunkAPI) => {
    const res = await bookService.create(book);
    await thunkAPI.dispatch(addBook(book));
    return res.data;
  },
);

export const removeBookAPI = createAsyncThunk(
  REMOVE,
  async (id, thunkAPI) => {
    const res = await bookService.remove(id);
    await thunkAPI.dispatch(removeBook(id));
    return res.data;
  },
);
