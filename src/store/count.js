const count = {
    state: {
        count: 3
    },
    mutations: {
        setIncrement(state, payload) {
            state.count = payload
        }
    },
    actions: {
        setIncrement({
            commit
        }, payload) {
            commit('setIncrement', payload)
        }
    },
    getters: {
        getCount(state) {
            return state.count
        }
    },
}

export default count