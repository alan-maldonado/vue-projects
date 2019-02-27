<template>
  <div id="toolbar">
    <i @click="addNote" class="glyphicon glyphicon-plus"></i>
    <i @click="toggleFavorite"
      v-if="activeNote"
      class="glyphicon glyphicon-star"
      :class="{starred: activeNote.favorite}"></i>
    <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['activeNote'])
  },
  methods: {
    ...mapActions(['addNote', 'deleteNote']),
    ...mapMutations(['toggleFavorite'])
  }
}
</script>
