import {guess,hot,group} from '../../service/getData'

export default {
    namespaced: true,
    state: {
        guess:'',
        hot:[],
        group:null
    },
    actions: {
        async site({commit}) {
          let guessx = await guess();
          let hotx = await hot();
          let groupx = await group();
          commit('setGuess',guessx);
          commit('setHot',hotx);
          commit('setGroup',groupx);
        }
    },
    mutations: {
        setGuess(state,guessx){
            state.guess=guessx
        },
        setHot(state,hotx){
            state.hot=hotx
        },
        setGroup(state,groupx){
            state.group=groupx
        }
    }



}