<template>
  <div id="app">
    <h3>Got jokes?</h3>
    <div class="btn-group">
      <button class="btn btn-success" @click="initJokes">Add Ten Random Jokes</button>
      <button class="btn btn-primary" @click="addJoke">Add a Joke</button>
    </div>

    <br>
    <div class="row col-md-12">
      <Joke v-for="(joke, index) in $store.state.jokes" :joke="joke" :key="index" :index="index"/>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Joke from "./Joke";
export default {
  data() {
    return {
      types: ["general", "knock-knock", "programming"],
      checkedTypes: ["general", "knock-knock", "programming"]
    };
  },
  methods: mapActions(["initJokes", "addJoke"]),
  components: {
    Joke
  }
};
</script>
