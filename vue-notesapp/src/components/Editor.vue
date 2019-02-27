<template>
  <div id="note-editor">
    <h5>Input: </h5>
    <textarea
      :value="activeNoteText"
      @input="onEditNote"
      class="form-control">
    </textarea>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['activeNoteText'])
  },
  methods: {
    ...mapMutations(['editNote']),
    onEditNote (e) {
      this.editNote(e.target.value)
    }
  }
}
</script>
