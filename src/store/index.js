import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

let _api = axios.create({
  baseURL: "https://api.themoviedb.org/3/search/",
  timeout: 3000
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    activeMovie: {}
  },
  mutations: {
    setMovies(state, movies){
      state.movies = movies
    },
    chooseMovie(state, movieChoice) {
      state.activeMovie = movieChoice
    }
  },
  actions: {
    async getMovies({ commit, dispatch }, query) {
      try {
        let res = await _api.get("movie?api_key=606e6aee588b47993fffe6d9530d07a6&page=1&include_adult=false&query="+query)
        commit("setMovies", res.data.results)
      } catch (error) {
        console.error(error)
      }
    },
    setActiveMovie({ commit }, movie) {
      commit('setActiveMovie', movie)
    }
  }
})
