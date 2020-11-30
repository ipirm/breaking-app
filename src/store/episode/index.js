import apiRequest from '@/utils/apiRequest';

export default {
    namespaced: true,

    state: {
        episodes: [],
        episode: {},
        deathCount: ''
    },

    mutations: {
        SET_EPISODES: (state, payload) => state.episodes = payload,
        SET_EPISODE: (state, payload) => state.episode = payload[0],
        SET_EPISODE_DEATH_COUNT: (state, payload) => state.deathCount = payload[0].deathCount
    },

    actions: {
        async getAllEpisodes({commit},season) {
            const url = typeof season === 'undefined' ? 'episodes' : `episodes?season=${season}`
            const data =  await apiRequest.get(url)
            commit('SET_EPISODES', data.data)
              },

        async getEpisode({commit},id) {
                const data =  await apiRequest.get(`episodes/${id}`)
                commit('SET_EPISODE', data.data)
             },
        async getDeathCount({commit},id) {
            const data =  await apiRequest.get(`death-count?episode=${id}`)
            commit('SET_EPISODE_DEATH_COUNT', data.data)
        }     
    }
}