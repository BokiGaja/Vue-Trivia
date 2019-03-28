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
    async addJoke({commit}) {
      const response = await client.getRandomJoke();
      commit('addJoke', response);
    }
  }
};
