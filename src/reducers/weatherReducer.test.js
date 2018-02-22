import * as reducer from './weatherReducer';
import {FETCH_WEATHER} from '../actions/types';

describe('weatherReducer', () => {
  it('should return initial state', () => {
    expect(reducer.weatherReducer(undefined, {})).toEqual([]);
  }),
  it('should handle FETCH_WEATHER', () => {
    const payload = { consolidated_weather: { weather: 'sunny' } }
    expect(reducer.weatherReducer(
      undefined,
      {
        type: FETCH_WEATHER,
        payload
      }
    )
  ).toEqual({ weather: 'sunny' });
  })
})
