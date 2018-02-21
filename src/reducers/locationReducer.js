import { FETCH_LOCATION } from '../actions/types';

export default function(state = [], action) {
  console.log(action);
  switch (action.type) {
    case FETCH_LOCATION:
      return action.payload.data || [];
    default:
      return state;
  }
}
