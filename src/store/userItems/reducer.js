import { LOAD_DATA, UPDATE_DATA } from './actionTypes';

const initialState = {
  data: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return { ...state, ...action.payload };
    case UPDATE_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default reducer;

