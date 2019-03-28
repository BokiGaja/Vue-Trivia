<template>
  <div class="card">
    <div class="card-header" id="headingOne">
      <h5 class="mb-0">
        <button class="btn btn-link" @click="showAnswer = !showAnswer">
          {{ trivia.question }}
        </button>
      </h5>
    </div>
    <div id="collapseOne" class="collapse show" v-if="showAnswer">
      <div class="card-body">
        {{ trivia.answer }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TriviaQuestions",
    props: ['trivia'],
    data() {
      return {
        showAnswer: false
      }
    },
  }
</script>
