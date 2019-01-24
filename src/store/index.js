import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import actions from './actions'
import mutations from './mutations'

import login from './modules/login'

import site from './modules/site'

import demand from './modules/demand'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userinfo:[]
  },
  getters,
  mutations,
  actions,
  modules: {
    login,
    site,
    demand
  }
})