import {
  FETCH_CATS,
  FETCH_FACTS
} from '../actions/types';

export default function (state = [], action) {
  switch(action.type) {
    case FETCH_CATS:
      return action.cats.map(cat => {
        return Object.assign({}, {
          url: cat.url[0],
          id: cat.id[0],
        });
      });
    case FETCH_FACTS:
      let newState = [];
      for (var i = 0; i < state.length; i++) {
        let tempState = Object.assign({}, state[i], {
          fact: action.facts[i]
        });
        newState.push(tempState);
      }
      return newState;
  }
  return state;
}
