import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movieCards: [],
  },
  getters: {
  },
  mutations: {
    LOAD_MOVIE_CARDS(state, results) {
      state.movieCards = results
    },
  },
  actions: {
    async loadMovieCards({ commit }) {
      const {
        data: { results },
      } = await axios({
        methods: 'get',
        url: 'https://api.themoviedb.org/3/movie/top_rated',
        params: {
          // api_key: process.env.VUE_APP_MOVIE_API,
          api_key: '567acc586fed43d416e488b297f888a5',
          language: 'ko-KR',
        },
      })

      commit('LOAD_MOVIE_CARDS', results)
    },
  },
  modules: {
  },
})
