import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author }) => (
  <div className="book-container">
    <p className="book-title">{title}</p>
    <p className="book-author">{author}</p>
    <button type="button" className="remove-button">Remove</button>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
