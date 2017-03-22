import axios from 'axios';
import {
  FETCH_CATS,
  FETCH_FACTS
} from './types';

export const fetchFacts = () => {
  return dispatch => {
    return axios.get('http://mapd-cats.azurewebsites.net/catfacts')
      .then(res => {
        return dispatch({
          type: FETCH_FACTS,
          facts: res
        });
      });
  };
};
