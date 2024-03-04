const developers = {
    state: {
        developers: []
    },
    mutations: {
        setDevelopers(state, developers) {
            state.developers = developers
        }
    },
    actions: {
        setDevelopers({commit}, developers){
            commit('setDevelopers', developers)
        }
    },
    getters: {
        getDevelopers(state) {
            return state.developers
        }
    },
}

export default developers