import React from 'react';
import './ResetButton.scss';
import { useDispatch } from 'react-redux';
import { deleteData } from '../../store/userItems/actions';

const ResetButton = () => {
  const dispatch = useDispatch();
  return (
    <button 
      onClick={() => dispatch(deleteData())}
      className='reset-button'
    >
      Reset
    </button>
  );
};

export default ResetButton;