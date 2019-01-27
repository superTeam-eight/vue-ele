import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import home from './modules/home/home'
import search from './modules/search/search'
import login from './modules/login'
import site from './modules/site'
import demand from './modules/demand'

import shop from './modules/shop/shop'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    geohash:'31.18183,121.69279',
    userinfo:[]
  },
  getters,
  mutations,
  actions,
  modules: {
    home,
    search,
    login,
    site,
    demand,
    shop
  }
})