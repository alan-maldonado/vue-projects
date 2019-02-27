// https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten
import axios from 'axios';
import * as types from './mutationTypes';

export const initJokes = ({ commit }) => {
  axios.get('http://api.icndb.com/jokes/random/10').then(res => {
    commit(types.INIT_JOKES, res.data.value);
  });
};

export const addJoke = ({ commit }) => {
  axios.get('http://api.icndb.com/jokes/random').then(res => {
    commit(types.ADD_JOKE, res.data.value);
  });
};

export const removeJoke = ({ commit }, index) => {
  commit(types.REMOVE_JOKE, index);
};
