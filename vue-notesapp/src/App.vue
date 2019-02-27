<template>
  <div id="app">
    <toolbar />
    <notes-list />
    <editor />
    <viewer />
  </div>
</template>

<script>
import Toolbar from './components/Toolbar'
import NotesList from './components/NotesList'
import Editor from './components/Editor'
import Viewer from './components/Viewer'

export default {
  components: {
    Toolbar,
    NotesList,
    Editor,
    Viewer
  }
}
</script>
