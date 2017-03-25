import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../src/actions';
import * as types from '../src/actions/types';
import nock from 'nock';
import expect from 'expect';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http'

const host = 'http://mapd-cats.azurewebsites.net';

axios.defaults.host = host;
axios.defaults.adapter = httpAdapter;

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  // it('fetchCats returns an array of objects', () => {
  //   nock(host)
  //     .get('http://mapd-cats.azurewebsites.net/catpics')
  //     .reply(200, [{ "name": "Analytics", "id": 0}])

  //   const expectedActions = [
  //     { type: types.FETCH_ROOMS, payload: [{ "name": "Analytics", "id": 0},] }
  //   ];

  //   const store = mockStore({ rooms: [] });
  //   return store.dispatch(actions.fetchRooms())
  //     .then(() => {
  //       expect(store.getActions()).toEqual(expectedActions)
  //     })
  // });

  it('fetchFacts returns an object with a facts property that is equal to an array', () => {
    nock(host)
      .get('http://mapd-cats.azurewebsites.net/catfacts')
      .reply(200, [{ "facts": ['abc', 'def']}])

    const expectedActions = [
      { type: types.FETCH_FACTS, facts: [{ "facts": ['abc', 'def']}] }
    ];

    const store = mockStore({ messages: [] })
    return store.dispatch(actions.fetchFacts)
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  });

  // it('updateTimer should return an action with type: UPDATE_TIMER', () => {
  //   const expectedAction = {
  //     type: types.UPDATE_TIMER,
  //   };

  //   expect(actions.updateTimer()).toEqual(expectedAction);
  // });

})
