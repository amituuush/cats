import {
  FETCH_CATS,
  FETCH_FACTS,
  DELETE_CARD,
  USER_INPUT
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
      return newState;

      // return state.map((item, index) => {
      //   return Object.assign({}, item, { fact: action.facts[index] });
      // });
    case DELETE_CARD:
      return state.filter((card) => {
        return card.id !== action.id;
      });
    case USER_INPUT:
      return state.map(catAndFact => {
        if (catAndFact.id === action.id) {
          catAndFact.fact = action.input;
          return catAndFact;
        } else {
          return catAndFact;
        }
      })
  }
  return state;
}
