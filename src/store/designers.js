const designers = {
    state: {
        designers: [{
                id: 0,
                name: 'Ivan',
                age: 31,
                role: 'Designer'
            },
            {
                id: 1,
                name: 'Vlad',
                age: 38,
                role: 'Designer'
            },
            {
                id: 2,
                name: 'Nikita',
                age: 28,
                role: 'Designer'
            },

        ]
    },
    mutations: {

    },
    actions: {

    },
    getters: {
        getDesigners(state) {
            return state.designers
        }
    },
}

export default designers