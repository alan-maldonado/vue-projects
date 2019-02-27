<template lang="html">
  <div class="note-viewer">
    <h5>Output: </h5>
    <div v-html="innerHtml" />
  </div>
</template>

<script>
import { markdown } from 'markdown'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['activeNoteText']),
    innerHtml () {
      return markdown.toHTML(this.activeNoteText || '')
    }
  }
}
</script>
