import {getdemand} from '../../service/getData'
export default {
    namespaced: true,
    state: {
        demandx: ''
    },
    actions: {
        async demanda({commit},data) {
            let zi = await getdemand(data);
            commit('setDemand', zi);
        }
    },
    mutations: {
        setDemand(state, zi) {
            state.demandx = zi
        }
    }

}