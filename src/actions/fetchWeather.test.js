import * as actions from './index';
import {FETCH_WEATHER} from './types';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);
const store = mockStore({ });

describe('weatherActions', () => {
  afterEach(() => {
    mock.reset()
    mock.restore()
  })
  const query = 'london';
  const expectedActions =
      [
        {
          type: FETCH_WEATHER,
          payload: { weather: 'thunderstorm' }
        }
      ]
  mock.onGet(`/api/location/${query}`).reply(200, { weather: 'thunderstorm' });
  it('should return weather', () => {
    return store.dispatch(actions.fetchWeather(query)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
