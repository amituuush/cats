import {
  FETCH_CATS,
  FETCH_FACTS
} from '../actions/types';

export const catsAndFactsReducer = (state = [], action) => {
  switch(action.type) {
    case FETCH_CATS:
      return state;
    case FETCH_FACTS:
      return action.facts;
  }
  return state;
};
