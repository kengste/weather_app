import { FETCH_WEATHER } from '../actions/types';

export default function(state = [], action) {
  console.log(action);
  switch (action.type) {
    case FETCH_WEATHER:
      return action.payload.data.consolidated_weather || [];
    default:
      return state;
  }
}
