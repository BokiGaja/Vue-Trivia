import {triviaService} from "../services/TriviaService";
import {ENDPOINTS} from "../services/HttpService";

export const triviaModule = {
  state: {
    trivias: [],
    categories: []
  },
  getters: {
    trivias: state => state.trivias,
    categories: state => state.categories
  },
  mutations: {
    addTrivias(state, trivias) {
      state.trivias = [...trivias]
    },
    addCategories(state, categories) {
      state.categories = [...categories]
    },
  },
  actions: {
    async addTrivias({commit}, payload) {
      const {data} = await triviaService.getAll(payload.endpoint, payload.type, payload.numOfTrivia);
      commit('addTrivias', data)
    },
    async addCategories({commit}, numberOfCategories) {
      const {data} = await triviaService.getAll(ENDPOINTS.TRIVIA_CATEGORIES, 'count', numberOfCategories);
      commit('addCategories', data)
    },
    async filterCategory({commit}, category) {
      const {data} = await triviaService.getSome(category.target.value);
      commit('addTrivias', data);
    },
  }
};
