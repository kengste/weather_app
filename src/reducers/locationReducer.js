import { FETCH_LOCATION } from '../actions/types';

export const locationReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_LOCATION:
      return action.payload || [];
    default:
      return state;
  }
}
