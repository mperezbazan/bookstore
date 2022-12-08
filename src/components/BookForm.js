import React from 'react';

const BookForm = () => (
  <form className="form-container">
    <input type="text" placeholder="Title" className="form-input" />
    <input type="text" placeholder="Author" className="form-input" />
    <input type="submit" value="Add book" className="form-input" />
  </form>
);

export default BookForm;
