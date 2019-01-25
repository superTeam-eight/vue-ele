import {
  SET_SHOP_DETAIL,
  SET_SHOP_FOODS,
  ADD_CART
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
    },
    [ADD_CART] (state, {shop_id, category_id, item_id, food_id}) {
      let category = state.foods.find(v => v.id === category_id)
      console.log(category)
      let item = category.foods.find(v => v.item_id === item_id)
      console.log(item)
      let food = item.specfoods.find(v => v.food_id === food_id)
      console.log(food)
      let value = state.cartgoods.shop_id.category_id.item_id.food_id
      
      // if( state.cartgoods.shop_id.category_id.item_id.food_id ){
      //   value.num ++
      // } else {
      //   value = {
      //     num: 1,
      //     id: food_id,
      //     name: food.name,
      //     packing_fee: food.packing_fee,
      //     price: food.price,
      //     sku_id: food.sku_id,
      //     specs: food.specs,
      //     stock: food.stock
      //   }
      // }
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