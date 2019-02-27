<template>
  <div>
    <h3>Events Dashboard</h3>
    <button class="btn btn-danger btn-sm signout-btn" @click="signOut">Sign Out</button>
    <hr>
    <add-event/>
    <hr>
    <div class="row col-md-12">
      <EventItem v-for="(event, index) in this.$store.state.events" :event="event" :key="index"/>
    </div>
  </div>
</template>

<script>
import { firebaseApp, eventsRef } from "../firebase";
import AddEvent from "./AddEvent";
import EventItem from "./EventItem";
export default {
  methods: {
    signOut() {
      this.$store.dispatch("signOut");
      firebaseApp.auth().signOut();
    }
  },
  components: {
    AddEvent,
    EventItem
  },
  mounted() {
    eventsRef.on("value", snap => {
      const events = [];
      snap.forEach(event => {
        events.push(event.val());
      });
      this.$store.dispatch("setEvents", events);
    });
  }
};
</script>

<style>
.signout-btn {
  position: absolute;
  text-align: right;
  top: 60px;
  right: 40px;
}
</style>
