<template>
  <div class="container">
    <select class="form-control" @change="filterCategory">
      <option v-for="categorie in categories" :key="categorie.id" :value="categorie.id">{{ categorie.title }}</option>
    </select>
    <div v-for="trivia in trivias" :key="trivia.id">
      <trivia-questions :trivia="trivia"/>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import TriviaQuestions from './TriviaQuestions'
  import {ENDPOINTS} from "../services/HttpService";

  export default {
    name: "TriviaApp",
    data() {
      return {
        currCategory: null,
      }
    },
    components: {
      TriviaQuestions
    },
    computed: {
      ...mapGetters([
        'trivias',
        'categories'
      ])
    },
    methods: {
      ...mapActions([
        'addTrivias',
        'addCategories',
        'filterCategory'
      ]),
    },
    created() {
      this.addTrivias({endpoint: ENDPOINTS.TRIVIA_RANDOM, type: 'count', numOfTrivia: 30});
      this.addCategories(10);
    }
  }
</script>
