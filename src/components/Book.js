import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAPI } from '../redux/books/books';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const { title, author, item_id: itemId } = book;
  const handleDelete = (e) => {
    dispatch(removeBookAPI(e.target.id));
  };

  return (
    <div className="book-container" key={itemId}>
      <p className="book-title">{title}</p>
      <p className="book-author">{author}</p>
      <button type="button" className="remove-button" id={itemId} onClick={handleDelete}>Remove</button>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape().isRequired,
};

export default Book;
