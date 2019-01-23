import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import home from './modules/home/home'
import search from './modules/search/search'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    geohash:''
  },
  getters,
  mutations,
  actions,
  modules: {
    home,
    search
  }
})