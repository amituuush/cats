import {
  SORT_CARDS
} from '../actions/types';

export default function (state = 'default', action) {
  switch(action.type) {
    case SORT_CARDS:
      return action.sort;
  }
  return state;
}
