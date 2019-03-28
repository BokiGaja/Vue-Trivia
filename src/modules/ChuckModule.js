import client from '../services/ChuckService'

export const chuckModule = {
  state: {
    jokes: []
  },
  getters: {
    jokes: state => state.jokes
  },
  mutations: {
    addJoke(state, joke) {
      state.jokes.push(joke)
    }
  },
  actions: {
    async addJoke({commit}, jokeCategory) {
      const response = await client.getRandomJoke(jokeCategory);
      commit('addJoke', response);
    }
  }
};
