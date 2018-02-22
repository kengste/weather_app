import * as actions from './index';
import {FETCH_LOCATION} from './types';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);
const store = mockStore({ });

describe('locationActions', () => {
  afterEach(() => {
    mock.reset()
    mock.restore()
  })
  const query = 'london';
  const expectedActions =
    [
      {
        type: FETCH_LOCATION,
        payload: { location: 'london' }
      }
    ]
  mock.onGet(`/api/location/search/?query=${query}`).reply(200, { location: 'london' });
  it('should return location', () => {
    return store.dispatch(actions.fetchLocation(query)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
