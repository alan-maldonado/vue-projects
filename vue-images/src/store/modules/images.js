import { router } from '../../main'
import api from '../../api/imgur'

const state = {
  images: []
}

const mutations = {
  setImages: (state, images) => {
    state.images = images
  }
}

const actions = {
  async fetchImages ({ commit, rootState }) {
    const { token } = rootState.auth
    const response = await api.fetchImages(token).then(res => res.data)
    commit('setImages', response.data)
  },

  async uploadImages ({ commit, rootState }, images) {
    const { token } = rootState.auth
    await api.uploadImages(images, token)

    router.push('/')
  }
}

const getters = {
  allImages: state => state.images
}

export default {
  state,
  mutations,
  actions,
  getters
}
