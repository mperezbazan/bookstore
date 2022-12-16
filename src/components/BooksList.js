import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooksAPI } from '../redux/books/books';
import Book from './Book';
import BookForm from './BookForm';

const BooksList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(getBooksAPI());
  }, []);
  return (
    <div className="container">
      {books.map((book) => <Book book={book} key={book.item_id} />)}
      <BookForm />
    </div>
  );
};

export default BooksList;
