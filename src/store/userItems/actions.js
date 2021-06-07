import { LOAD_DATA, UPDATE_DATA } from './actionTypes';

export const setHeaderData = (data) => ({
  type: LOAD_DATA,
  payload: data,
});

export const headerDataLoading = (data) => ({
  type: UPDATE_DATA,
  payload: data,
});
