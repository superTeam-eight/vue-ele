
import {verificationCode} from '../../service/getData'

export default {
    namespaced: true,
    state: {
        verificationcode:''
    },
    actions: {
        async verification({commit}) {
          let a = await verificationCode()
          commit('setVerification', a);
        }
    },
    mutations: {
        setVerification(state,data){
            state.verificationcode = data;
        }
    }



}