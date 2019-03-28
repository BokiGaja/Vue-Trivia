<template>
  <div class="container">
    <div v-for="joke in jokes" :key="joke.id">
      <img :src="joke.icon_url" alt="">
      <p>{{ joke.value }}</p>
      <a :href="joke.url"></a>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import {store} from "../store/store";

  export default {
    name: "",
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
