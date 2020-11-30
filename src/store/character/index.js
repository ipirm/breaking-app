import apiRequest from '@/utils/apiRequest';

export default {
    namespaced: true,

    state: {
        episodes: [],
        character: {},
        deathCount: ''
    },

    mutations: {
        SET_CHARACTER: (state, payload) => state.character = payload[0],
        SET_EPISODE_DEATH_COUNT: (state,payload) => state.deathCount = payload[0].deathCount
    },

    actions: {
        async getCharacter({commit},id) {
                const data =  await apiRequest.get(`characters?name=${id}`)
                commit('SET_CHARACTER', data.data)
             },
        async getDeathCount({commit},id) {
            const data =  await apiRequest.get(`death-count?name==${id}`)
            commit('SET_EPISODE_DEATH_COUNT', data.data)
        }     
    }
}