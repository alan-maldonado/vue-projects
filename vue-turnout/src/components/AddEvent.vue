<template>
  <div class>
    <h4>
      Add an Event
      <input type="checkbox" v-model="showForm">
    </h4>
    <div v-if="showForm" class="form">
      <div class="form-group">
        <label>Title</label>
        <input type="text" class="form-control" v-model="event.title">
      </div>
      <div class="form-group">
        <label>Description</label>
        <input type="text" class="form-control" v-model="event.description">
      </div>
      <div class="form-group">
        <label>Date</label>
        <input type="date" class="form-control" v-model="event.date">
      </div>
      <div class="form-group">
        <label>Location</label>
        <input type="text" class="form-control" v-model="event.location">
      </div>
      <button class="btn btn-sm btn-primary" @click="addEvent">Submit</button>
    </div>
  </div>
</template>

<script>
import { eventsRef } from "../firebase";
export default {
  data() {
    return {
      event: {
        title: "",
        description: "",
        date: "",
        location: "",
        email: ""
      },
      showForm: false
    };
  },
  methods: {
    addEvent() {
      this.event.email = this.$store.state.user.email;
      eventsRef.push(this.event);
    }
  }
};
</script>

<style>
.form {
  padding-left: 10%;
  padding-right: 10%;
}
</style>
