import {
  SET_SHOP_DETAIL,
  SET_SHOP_FOODS,
  ADD_CART,
  REMOVE_CART
} from '../../mutation-types'
import { 
  getShopDetail,
  getShopFoods
 } from '../../../service/getData'
export default {
  state: {
    shop: null,
    foods: null,
    cartgoods: {}
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
      let item = category.foods.find(v => v.item_id === item_id)
      let food = item.specfoods.find(v => v.food_id === food_id)
      if(state.cartgoods[shop_id]) {
        if(state.cartgoods[shop_id][category_id]) {
          if(state.cartgoods[shop_id][category_id][item_id]) {
            if(state.cartgoods[shop_id][category_id][item_id][food_id]) {
              state.cartgoods[shop_id][category_id][item_id][food_id].num ++
            } else {
              state.cartgoods[shop_id][category_id][item_id] = Object.assign({}, state.cartgoods[shop_id][category_id][item_id], {
                [food_id] : {
                  num: 1,
                  id: food_id,
                  name: food.name,
                  packing_fee: food.packing_fee,
                  price: food.price,
                  sku_id: food.sku_id,
                  specs: food.specs_name,
                  stock: food.stock
                }
              })
            }
          } else {
            state.cartgoods[shop_id][category_id] = Object.assign({}, state.cartgoods[shop_id][category_id], {
              [item_id] : {
                [food_id] : {
                  num: 1,
                  id: food_id,
                  name: food.name,
                  packing_fee: food.packing_fee,
                  price: food.price,
                  sku_id: food.sku_id,
                  specs: food.specs_name,
                  stock: food.stock
                }
              }
            })
          }
        } else {
          state.cartgoods[shop_id] = Object.assign({}, state.cartgoods[shop_id], {
            [category_id] : {
              [item_id] : {
                [food_id] : {
                  num: 1,
                  id: food_id,
                  name: food.name,
                  packing_fee: food.packing_fee,
                  price: food.price,
                  sku_id: food.sku_id,
                  specs: food.specs_name,
                  stock: food.stock
                }
              }
            }
          })
        }
      } else {
        state.cartgoods = Object.assign({}, state.cartgoods, {
          [shop_id] : {
            [category_id] : {
              [item_id] : {
                [food_id] : {
                  num: 1,
                  id: food_id,
                  name: food.name,
                  packing_fee: food.packing_fee,
                  price: food.price,
                  sku_id: food.sku_id,
                  specs: food.specs_name,
                  stock: food.stock
                }
              }
            }
          }
        })
      }
      localStorage.setItem("cartgoods", JSON.stringify(state.cartgoods))
    },
    [REMOVE_CART] (state, {shop_id, category_id, item_id, food_id}) {
      state.cartgoods[shop_id][category_id][item_id][food_id].num --
      if(state.cartgoods[shop_id][category_id][item_id][food_id].num === 0) {
        delete state.cartgoods[shop_id][category_id][item_id][food_id]
        if (!Object.keys(state.cartgoods[shop_id][category_id][item_id]).length) {
          delete state.cartgoods[shop_id][category_id][item_id]
          if (!Object.keys(state.cartgoods[shop_id][category_id]).length) {
            delete state.cartgoods[shop_id][category_id]
            if (!Object.keys(state.cartgoods[shop_id]).length) {
              delete state.cartgoods[shop_id]
            }
          }
        }
      }
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