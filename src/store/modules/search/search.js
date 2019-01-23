import { aSousuo } from "../../../service/getData";
import { SEARCHSHOP } from "../../mutation-types";

export default{
    namespaced:true,
    state:{
        menu:{},
        shops:[]
    },
    getters:{},
    actions:{
        async sousuo({commit,state},keyword){
            state.menu.keyword=keyword;
            state.menu.type='search';
            const position =localStorage.getItem('geohash');
            state.menu.geohash=position;
            let asousuo= await aSousuo(state.menu);
            console.log(asousuo);
            commit('SEARCHSHOP',asousuo.data);
        }
    },
    mutations:{
        [SEARCHSHOP](state,asousuo){
            state.shops=asousuo
        }
    }
}