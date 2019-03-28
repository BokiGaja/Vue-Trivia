<template>
  <div class="container">
    <select class="form-control" @change="filterCategory">
      <option v-for="categorie in categories" :key="categorie.id" :value="categorie.id">{{ categorie.title }}</option>
    </select>
    <div v-for="(trivia, index) in trivias" :key="trivia.id" v-if="index+1 <= currPage*10 && index+1 > (currPage-1)*10">
      <trivia-questions :trivia="trivia"/>
    </div>
    <div class="d-flex flex-row justify-content-center">
        <button  class="btn btn-primary d-flex flex-column" v-for="(trivia, index) in trivias" :key="trivia.id"
                 v-if="index < trivias.length/10"
                @click="changePage(index+1 )" style="width: 35px; margin: auto 5px">{{ index+1 }}
        </button>
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
        currPage: 1
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
      changePage(nextPage) {
        this.currPage = nextPage;
      }
    },
    created() {
      this.addTrivias({endpoint: ENDPOINTS.TRIVIA_RANDOM, type: 'count', numOfTrivia: 30});
      this.addCategories(10);
    }
  }
</script>
