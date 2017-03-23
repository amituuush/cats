import axios from 'axios';
import { parseString } from 'xml2js';

import {
  FETCH_CATS,
  FETCH_FACTS
} from './types';

export const fetchCats = () => {
  return dispatch => {
    return axios.get('http://mapd-cats.azurewebsites.net/catpics')
      .then(res => {
        dispatch(fetchFacts());
        parseString(res.data, (err, result) => {
          return dispatch({
            type: FETCH_CATS,
            cats: result.response.data[0].images[0].image
          });
        });
      });
  };
};

export const fetchFacts = () => {
  return dispatch => {
    return axios.get('http://mapd-cats.azurewebsites.net/catfacts')
      .then(res => {
        return dispatch({
          type: FETCH_FACTS,
          facts: res.data.facts
        });
      });
  };
};
