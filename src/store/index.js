import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import home from './modules/home/home'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  getters,
  mutations,
  actions,
  modules: {
    home
  }
})