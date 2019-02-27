<template>
  <div class="col-md-6">
    <div class="joke-card">
      <div class="card-block">
        <button class="close" @click="removeJoke(index)">
          <span>&times;</span>
        </button>
        <h5>{{joke.categories.join(', ')}}</h5>
        <p>
          <em>{{joke.joke}}</em>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["joke", "index"],
  methods: mapActions(["removeJoke"])
};
</script>
