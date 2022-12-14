import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookAPI } from '../redux/books/books';

const BookForm = () => {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const message = document.querySelector('#message');
    if (title.value === '' || author.value === '') {
      message.textContent = 'Please, complete Title and Author to add the book';
    } else {
      dispatch(addBookAPI({ item_id: uuidv4(), ...formData, category: 'Unknown' }));
      setFormData({});
      title.value = '';
      author.value = '';
      message.textContent = '';
    }
  };

  return (
    <>
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <input type="text" placeholder="Book Title" id="title" name="title" className="form-input" onChange={handleChange} />
        <input type="text" placeholder="Book Author" id="author" name="author" className="form-input" onChange={handleChange} />
        <input type="submit" value="ADD BOOK" className="form-input-button" />
      </form>
      <small id="message" />
    </>
  );
};

export default BookForm;
