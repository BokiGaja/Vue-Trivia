<template>
  <div class="container">
    <div v-for="joke in jokes" :key="joke.id">
      <img :src="joke.iconUrl" alt="">
      <p>{{ joke.value }}</p>
      <a :href="joke.sourceUrl" class="btn btn-success">Go to joke</a>
    </div>
    <input type="text" v-model="jokeCategory" placeholder="Insert joke category">
    <button @click="addJoke(jokeCategory)" class="btn btn-primary">Get a new joke</button>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import {store} from "../store/store";

  export default {
    name: "",
    data() {
      return {
        jokeCategory: ''
      }
    },
    computed: {
      ...mapGetters([
        'jokes'
      ])
    },
    methods: {
      ...mapActions([
        'addJoke'
      ])
    },
    beforeRouteEnter(to, from, next) {
      store.dispatch('addJoke').then(() => next())
    }
  }
</script>
