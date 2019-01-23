import { aSousuo } from "../../../service/getData";

export default{
    namespaced:true,
    state:{
        menu:{}
    },
    getters:{},
    actions:{
        async sousuo({commit,state},keyword){
            state.menu.keyword=keyword;
            state.menu.type='search';
            const position =localStorage.getItem('geohash').split(',');
            state.menu.latitude=position[0]
            state.menu.longitude=position[1]
            let asousuo= await aSousuo(state.menu)
            console.log(state.menu)
            console.log(asousuo)

        }
    },
    mutations:{}
}