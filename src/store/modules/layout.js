const layout = {
    state: {
        menus: [
            {
                name: 'Dashboard',
                icon: 'dashboard',
                path: '/dashboard',
                role: [1,2,3,4,5,6]
            },
            {
                name: 'Permission',
                icon: 'team',
                path: '/permission',
                role: [1,2,3,4,5,6],
            },
        ]

    },
    mutations: {
        UPDATE_MENUS: (state, menus) => {
            state.menus = menus
        }
    },
    actions: {
        initMenus: ({commit}) => {
            const tmp = JSON.parse(localStorage.getItem('menus'));
            if (tmp !== undefined) {
                commit('UPDATE_MENUS', tmp)
            }
        },

        changeMenus: ({commit}, menus) => {
            localStorage.setItem('menus', JSON.stringify(menus));
            commit('UPDATE_MENUS', menus)
        }
    }
};
export default layout
