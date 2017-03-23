import { combineReducers } from 'redux';
import catsAndFactsReducer from './cats_and_facts_reducer';

const rootReducer = combineReducers({
  catsAndFacts: catsAndFactsReducer
});

export default rootReducer;
