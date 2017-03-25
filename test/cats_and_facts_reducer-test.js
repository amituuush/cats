import expect from 'expect';
import catsAndFactsReducer from '../src/reducers/cats_and_facts_reducer';
import axios from 'axios';
import { FETCH_CATS, FETCH_FACTS } from '../src/actions/types';

describe('catsAndFactsReducer', () => {

  it('returns the initial state', () => {
   expect(catsAndFactsReducer(undefined, {})).toEqual([]);
  });
});
