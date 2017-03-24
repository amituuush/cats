import {
  FETCH_CATS,
  FETCH_FACTS,
  DELETE_CARD
} from '../actions/types';

export default function (state = [], action) {
  switch(action.type) {
    case FETCH_CATS:
      return action.cats.map(cat => {
        return Object.assign({}, {
          url: cat.url[0],
          id: cat.id[0],
          i: cat.id[0],
          x: 1,
          y: 0,
          w: 1,
          h: 2
        });
      });
    case FETCH_FACTS:
      const newState = [];
      for (let i = 0; i < state.length; i++) {
        const tempState = Object.assign({}, state[i], {
          fact: action.facts[i]
        });
        newState.push(tempState);
      }
      return newState;
    case DELETE_CARD:
      return state.filter((card) => {
        return card.id !== action.id;
      });
  }
  return state;
}