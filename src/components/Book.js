import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const { title, author, id } = book;
  const handleDelete = (e) => {
    dispatch(removeBook(e.target.id));
  };

  return (
    <div className="book-container" key={id}>
      <p className="book-title">{title}</p>
      <p className="book-author">{author}</p>
      <button type="button" className="remove-button" id={id} onClick={handleDelete}>Remove</button>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape().isRequired,
};

export default Book;
