import React from 'react';
import Book from './Book';
import BookForm from './BookForm';

const BooksList = () => (
  <div className="container">
    <Book title="Harry Potter and the Philosopher's Stone" author="J. K. Rowling" />
    <BookForm />
  </div>
);

export default BooksList;
