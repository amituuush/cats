import axios from 'axios';
import { parseString } from 'xml2js';

import {
  FETCH_CATS,
  FETCH_FACTS,
  DELETE_CARD,
  SORT_CARDS
} from './types';

export const fetchCatsSuccess = (res) => {
  return {
    type: FETCH_CATS,
    cats: res
  };
};

export const fetchCats = () => {
  return dispatch => {
    return axios.get('http://mapd-cats.azurewebsites.net/catpics')
      .then(res => {
        parseString(res.data, (err, result) => {
          return dispatch(fetchCatsSuccess(result.response.data[0].images[0].image));
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const fetchFactsSuccess = (res) => {
  return {
    type: FETCH_FACTS,
    facts: res
  }
}

export const fetchFacts = () => {
  return dispatch => {
    return axios.get('http://mapd-cats.azurewebsites.net/catfacts')
      .then(res => {
        return dispatch(fetchFactsSuccess(res.data.facts));
      })
      .catch(err => {
        console.log('err', err);
      });
  };
};

export const fetchCatsAndFacts = () => {
  return dispatch => {
    return dispatch(fetchCats())
      .then(res => {
        dispatch(fetchFacts());
      })
      .catch(err => {
        console.log(err);
      });
    };
};

export const deleteCard = (id) => {
  return {
    type: DELETE_CARD,
    id: id
  }
}

export const sortCards = (sort) => {
  return {
    type: SORT_CARDS,
    sort: sort
  }
}
