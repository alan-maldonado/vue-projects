import * as types from './mutationTypes';
export default {
  signIn({ commit }, user) {
    commit(types.SIGN_IN, user);
  },
  signOut({ commit }) {
    commit(types.SIGN_OUT);
  },
  setEvents({ commit }, events) {
    commit(types.SET_EVENTS, events);
  }
};
