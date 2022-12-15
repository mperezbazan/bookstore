import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import BookForm from './BookForm';

const BooksList = () => {
  const books = useSelector((state) => state.books);
  return (
    <div className="container">
      {books.map((book) => <Book book={book} key={book.id} />)}
      <BookForm />
    </div>
  );
};

export default BooksList;
