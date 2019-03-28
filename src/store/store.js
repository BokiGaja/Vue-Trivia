import Vue from 'vue'
import Vuex from 'vuex'
import {chuckModule} from "../modules/ChuckModule";
import {triviaModule} from "../modules/TriviaModule";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    chuckModule,
    triviaModule
  }
});