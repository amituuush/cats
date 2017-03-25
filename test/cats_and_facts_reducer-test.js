import expect from 'expect';
import catsAndFactsReducer from '../src/reducers/cats_and_facts_reducer';
import axios from 'axios';
import { FETCH_CATS, FETCH_FACTS } from '../src/actions/types';

describe('catsAndFactsReducer', () => {

  it('returns the initial state', () => {
   expect(catsAndFactsReducer(undefined, {})).toEqual([]);
  });

  it('handles the FETCH_CATS action', () => {
   expect(catsAndFactsReducer([], {
     type: FETCH_CATS,
     payload: [1, 2, 3, 4, 5, 6]
  }).length).toEqual(6);
  });
});
