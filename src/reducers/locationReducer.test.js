import * as reducer from './locationReducer';
import {FETCH_LOCATION} from '../actions/types';


describe('locationReducer', () => {
  it('should return initial state', () => {
    expect(reducer.locationReducer(undefined, {})).toEqual([]);
  }),
  it('should handle FETCH_LOCATION', () => {
    const payload = { location: 'london' }
    expect(reducer.locationReducer(
      undefined,
      {
        type: FETCH_LOCATION,
        payload
      }
    )
  ).toEqual(payload);
  })
})
