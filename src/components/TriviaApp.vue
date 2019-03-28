<template>
  <div class="container">
    <div v-for="trivia in trivias" :key="trivia.id">
      <trivia-questions :trivia="trivia"/>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import TriviaQuestions from './TriviaQuestions'

  export default {
    name: "",
    components: {
      TriviaQuestions
    },
    computed: {
      ...mapGetters([
        'trivias'
      ])
    },
    methods: {
      ...mapActions([
        'addTrivias'
      ])
    },
    created() {
      this.addTrivias(30);
    }
  }
</script>
