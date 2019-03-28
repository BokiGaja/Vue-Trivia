import Vue from 'vue'
import Vuex from 'vuex'
import {chuckModule} from "./ChuckModule";
import {triviaModule} from "./TriviaModule";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    chuckModule,
    triviaModule
  }
});