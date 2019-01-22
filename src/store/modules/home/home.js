import {hometypes} from '../../../service/getData'
import { HOMETYPES } from '../../mutation-types';
export default {
    namespaced:true,
    state:{
        types:[]
    },
    getters:{},
    actions:{
        async hometype({commit}){
           let types= await hometypes()
        //    console.log(types)
           commit('HOMETYPES',types.data)
        }
    },
    mutations:{
        [HOMETYPES](state,types){
            for(let i=0;i<types.length;i+=8){
                state.types.push(types.slice(i,i+8))
            }
            console.log(state.types)
            // state.types=types
        }
    }
}