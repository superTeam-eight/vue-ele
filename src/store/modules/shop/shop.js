import {
  SET_SHOP_DETAIL
} from '../../mutation-types'
import { 
  getShopDetail
 } from '../../../service/getData'
export default {
  state: {
    shop: null,
    cartgoods: null
  },
  mutations: {
    [SET_SHOP_DETAIL] (state, status) {
      state.shop = status
    }
  },
  actions: {
    async getShopDetail ({commit}, id) {
      try {
        let res = await getShopDetail(id)
        commit('SET_SHOP_DETAIL', res.data)
      } catch (error) {
        
      }
      
    }
  },
  namespaced: true
}