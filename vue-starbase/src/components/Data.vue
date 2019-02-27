<template>
  <div class="col-md-12">
    <Item v-for="(item, index) in items" :key="index" :passedItem="item" :type="type"/>
  </div>
</template>

<script>
import axios from "axios";
import Item from "./Item";
export default {
  components: {
    Item
  },
  data() {
    return {
      type: this.$route.params.type,
      items: []
    };
  },
  watch: {
    $route: "fetchItems"
  },
  methods: {
    fetchItems() {
      this.items = [];
      this.type = this.$route.params.type;
      const initialIds = [1, 13, 14];

      for (let i in initialIds) {
        const id = initialIds[i];
        axios
          .get(`https://swapi.co/api/${this.type}/${id}`)
          .then(res => this.items.push(res.data));
      }
    }
  },
  created() {
    this.fetchItems();
  }
};
</script>
