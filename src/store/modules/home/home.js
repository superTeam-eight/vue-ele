import {hometypes} from '../../../service/getData'
import { HOMETYPES } from '../../mutation-types';
import { GETSHOPSLIST } from '../../mutation-types';
import {shopslist} from '../../../service/getData';
export default {
    namespaced:true,
    state:{
        types:[],
        page:{
            latitude:'',
            longitude:''
        },
        shoplist:[]

    },
    getters:{},
    actions:{
        async hometype({commit}){
           let types= await hometypes()
        //    console.log(types)
           commit('HOMETYPES',types.data)
        },
        // 获取商铺列表
        async getshopslist({commit,state},geohash){
            const position =geohash.split(',')
            state.page.latitude=position[0];
            state.page.longitude=position[1];
            let shoplist =await shopslist(state.page)
            commit('GETSHOPSLIST',shoplist.data)
        },
        async changeActivityType({commit,state},page){
            state.page={...state.page,...page}
            console.log(state.page)
            let shoplist =await shopslist(state.page)
            commit('GETSHOPSLIST',shoplist.data)
        }

    },
    mutations:{
        [HOMETYPES](state,types){
            for(let i=0;i<types.length;i+=8){
                state.types.push(types.slice(i,i+8))
            }
            console.log(state.types)
            // state.types=types
        },
        [GETSHOPSLIST](state,shoplist){
            console.log(shoplist)
            state.shoplist=shoplist
        }
    }
}