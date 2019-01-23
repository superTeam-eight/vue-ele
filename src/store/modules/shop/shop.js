import {
  SET_STICKY
} from '../../mutation-types'
export default {
  state: {
    cartgoods: null,
    isSticky: false
  },
  mutations: {
    [SET_STICKY] (state, status) {
      state.isSticky = status
    }
  },
  namespaced: true
}