import * as actions from './index';
import {FETCH_WEATHER, FETCH_LOCATION} from './types';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);
const store = mockStore({ });

describe('LocationAction', () => {
  afterEach(() => {
    mock.reset()
    mock.restore()
  })
  it('should return location', () => {
    const query = 'london';
    const expectedActions =
      [
        {
          type: FETCH_LOCATION,
          payload: { location: 'london' }
        }
      ]
    mock.onGet(`/api/location/search/?query=${query}`).reply(200, { location: 'london' });
    return store.dispatch(actions.fetchLocation(query)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
