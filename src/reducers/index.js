import { combineReducers } from 'redux';
import catsAndFactsReducer from './cats_and_facts_reducer';
import sortReducer from './sort_reducer';

const rootReducer = combineReducers({
  catsAndFacts: catsAndFactsReducer,
  sorted: sortReducer
});

export default rootReducer;
