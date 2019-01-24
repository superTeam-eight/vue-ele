import {
  SET_SHOP_DETAIL,
  SET_SHOP_FOODS
} from '../../mutation-types'
import { 
  getShopDetail,
  getShopFoods
 } from '../../../service/getData'
export default {
  state: {
    shop: null,
    foods: null,
    cartgoods: null
  },
  mutations: {
    [SET_SHOP_DETAIL] (state, status) {
      state.shop = status
    },
    [SET_SHOP_FOODS] (state, status) {
      console.log()
      state.foods = status
    }
  },
  actions: {
    async getShopDetail ({ commit }, id) {
      try {
        let res = await getShopDetail(id)
        commit('SET_SHOP_DETAIL', res.data)
      } catch (error) {
        
      }
      
    },
    async getShopFoods ({  commit }, id) {
      try {
        let res = await getShopFoods(id)
        commit('SET_SHOP_FOODS', res.data)
      } catch (error) {
        
      }
    }
  },
  namespaced: true
}