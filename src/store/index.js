import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import actions from './actions'
import mutations from './mutations'

import shop from './modules/shop/shop'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  getters,
  mutations,
  actions,
  modules: {
    shop
  }
})