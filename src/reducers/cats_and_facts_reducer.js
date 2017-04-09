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

      // state.forEach(function(state) {
      //   newState.push(Object.assign({}, state, {
      //     fact: action.facts[i]
      //   }))
      // })

      return newState;
    case DELETE_CARD:
      return state.filter((card) => {
        return card.id !== action.id;
      });
  }
  return state;
}
