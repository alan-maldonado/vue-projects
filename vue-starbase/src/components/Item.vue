<template>
  <div class="col-md-4" @click="switchItem">
    <div class="item-card">
      <div class="card-block">
        <h4 class="card-title">{{item.name}}</h4>
        <div v-for="(value, key, index) in item" :key="index">
          <div v-if="index < 5">
            <strong>{{key}}</strong>
            : {{value}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["passedItem", "type"],
  data() {
    return {
      item: ""
    };
  },
  methods: {
    switchItem() {
      const randomId = Math.floor(Math.random() * 63) + 1;
      axios.get(`https://swapi.co/api/${this.type}/${randomId}`).then(res => {
        this.item = res.data;
      });
    }
  },
  created() {
    this.item = this.passedItem;
  }
};
</script>
