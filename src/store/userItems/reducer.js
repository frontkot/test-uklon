import { LOAD_DATA, UPDATE_DATA } from './actionTypes';

const initialState = {
  data: [
    {name: 'a', value: [null, true, true, true]},
    {name: 'b', value: [false, null, true, true]},
    {name: 'c', value: [false, false, null, true]},
    {name: 'd', value: [false, false, false, null]},
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return { ...state, ...action.payload };
    case UPDATE_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducer;
