import qs from 'querystring'

import { router } from '../../main'
import api from '../../api/imgur'

const state = {
  token: window.localStorage.getItem('imgur_token')
}

const mutations = {
  setToken: (state, token) => {
    state.token = token
  }
}

const actions = {
  login: () => {
    api.login()
  },
  finalizeLogin: ({ commit }, hash) => {
    const query = qs.parse(hash.replace('#', ''))
    commit('setToken', query.access_token)
    window.localStorage.setItem('imgur_token', query.access_token)
    router.push('/')
  },
  logout: ({ commit }) => {
    commit('setToken', null)
    window.localStorage.removeItem('imgur_token')
  }
}

const getters = {
  isLoggedIn: state => !!state.token
}

export default {
  state,
  mutations,
  actions,
  getters
}
