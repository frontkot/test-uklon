import { LOAD_DATA, UPDATE_DATA } from './actionTypes';

const initialState = {
  data: [
    {name: 'a', value: [null, true, true, true, true, true, true, true, true, true, true, true]},
    {name: 'b', value: [false, null, true, true, true, true, true, true, true, true, true, true]},
    {name: 'c', value: [false, false, null, true, true, true, true, true, true, true, true, true]},
    {name: 'd', value: [false, false, false, null, true, true, true, true, true, true, true, true]},
    {name: 'e', value: [false, false, false, false, null, true, true, true, true, true, true, true]},
    {name: 'f', value: [false, false, false, false, false, null, true, true, true, true, true, true]},
    {name: 'g', value: [false, false, false, false, null, false, null, true, true, true, true, true]},
    {name: 'k', value: [false, false, false, false, null, false, false, null, true, true, true, true]},
    {name: 'l', value: [false, false, false, false, null, false, false, false, null, true, true, true]},
    {name: 'm', value: [false, false, false, false, null, false, false, false, false, null, true, true]},
    {name: 'n', value: [false, false, false, false, null, false, false, false, false, false, null, true,]},
    {name: 'o', value: [false, false, false, false, null, false, false, false, false, false, false, null]},
  ]
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
