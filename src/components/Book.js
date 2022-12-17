import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAPI } from '../redux/books/books';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const {
    title,
    author,
    item_id: itemId,
    category,
  } = book;
  const handleDelete = (e) => {
    dispatch(removeBookAPI(e.target.id));
  };

  return (
    <div className="book-container" key={itemId}>
      <div className="book-content">
        <div className="book-info">
          <p className="book-category">{category}</p>
          <p className="book-title">{title}</p>
          <p className="book-author">{author}</p>
          <div className="book-buttons">
            <button type="button" className="book-action-button">Comments</button>
            <div className="vertical-divider" />
            <button type="button" className="book-action-button" id={itemId} onClick={handleDelete}>Remove</button>
            <div className="vertical-divider" />
            <button type="button" className="book-action-button">Edit</button>
          </div>
        </div>
        <div className="progress-container">
          <div className="circular-progress-container">
            <div className="circular-progress" />
          </div>
          <div className="progress-stats">
            <p className="progress-percent">64%</p>
            <p className="progress-text">Completed</p>
          </div>
          <div className="progress-divider" />
          <div className="current-container">
            <div className="current-content">
              <p className="current-title">CURRENT CHAPTER</p>
              <p className="current-chapter">Chapter 17</p>
            </div>
            <button type="button" className="current-button">UPDATE PROGRESS</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape().isRequired,
};

export default Book;
