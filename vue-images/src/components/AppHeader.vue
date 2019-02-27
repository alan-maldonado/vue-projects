<template>
  <div class="ui secondary pointing menu">
    <router-link to="/" class="active ui item">Image Store</router-link>

    <div class="right menu">
      <div v-if="isLoggedIn" class="horizontal">
        <router-link class="item" to="/">Galleries</router-link>
        <router-link class="item" to="/upload">Upload</router-link>
        <a @click.prevent="logout" href="#" class="ui item">Logout</a>
      </div>
      <a v-else @click="login" href="#" class="ui item">Login</a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'AppHeader',
  computed: mapGetters(['isLoggedIn']),
  methods: mapActions(['login', 'logout'])
}
</script>

<style scoped>
.horizontal {
  display: flex;
  flex-direction: row;
}
</style>
