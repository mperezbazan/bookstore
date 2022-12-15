import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const CategoriesContainer = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories.text);
  const handleClick = () => {
    dispatch(checkStatus());
  };
  return (
    <>
      <div className="container">
        <button type="button" onClick={handleClick}>Check Status</button>
        <p className="status-message">{`Status: ${status}`}</p>
      </div>
    </>
  );
};

export default CategoriesContainer;
