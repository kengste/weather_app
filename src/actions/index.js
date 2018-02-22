import axios from 'axios';
import {FETCH_WEATHER, FETCH_LOCATION} from './types';

export const fetchLocation = (query) => async dispatch => {
  const res = await axios.get(`/api/location/search/?query=${query}`)
  dispatch({ type: FETCH_LOCATION, payload: res.data });
}

export const fetchWeather = (query) => async dispatch => {
  const res = await axios.get(`/api/location/${query}`)
  dispatch({ type: FETCH_WEATHER, payload: res.data });
}
