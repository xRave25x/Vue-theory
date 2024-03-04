import Vue from 'vue'
import Vuex from 'vuex'
import count from './count'
import designers from './designers'
import developers from './developers'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isLoading: false
    },
    mutations: {
        setIsLoading(state, payload){
            state.isLoading = payload
        }
    },
    actions: {
        setIsLoading({commit}, payload){
            commit('setIsLoading', payload)
        }
    },
    getters: {
        getIsLoading(state) {
            return state.isLoading
        }
    },
    modules: {
        count,
        designers,
        developers
    }
})

export default store