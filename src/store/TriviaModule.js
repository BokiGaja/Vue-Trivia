import {triviaService} from "../services/TriviaService";
import {ENDPOINTS} from "../services/HttpService";

export const triviaModule = {
  state: {
    trivias: []
  },
  getters: {
    trivias: state => state.trivias
  },
  mutations: {
    addTrivias(state, trivias) {
      state.trivias = [...trivias]
    }
  },
  actions: {
    async addTrivias({commit}, numberOfTrivias) {
      const {data} = await triviaService.getAll(ENDPOINTS.TRIVIA_RANDOM, numberOfTrivias);
      commit('addTrivias', data)
    }
  }
};
