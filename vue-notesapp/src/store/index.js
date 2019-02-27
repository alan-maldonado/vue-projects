import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes: [],
    activeNote: {}
  },
  actions: {
    addNote (context) {
      const newNote = {
        text: 'New note',
        favorite: false
      }
      const notes = [ newNote, ...context.state.notes ]
      context.commit('setNotes', notes)
      context.commit('setActiveNote', newNote)
    },
    deleteNote ({ commit, state }) {
      const index = state.notes.indexOf(state.activeNote)
      const notes = state.notes
      if (index !== -1) {
        notes.splice(index, 1)
        commit('setNotes', notes)
        commit('setActiveNote', notes.length ? notes[0] : {})
      }
    }
  },
  mutations: {
    setActiveNote (state, note) {
      state.activeNote = note
    },
    setNotes (state, notes) {
      state.notes = notes
    },
    editNote (state, input) {
      state.activeNote.text = input
    },
    toggleFavorite (state) {
      state.activeNote.favorite = !state.activeNote.favorite
    }
  },
  getters: {
    activeNoteText: ({ activeNote }) => activeNote.text || '',
    filteredNotes: ({ notes }) => {
      const filter = (criteria) => {
        switch (criteria) {
          case 'favorites':
            return notes.filter(note => note.favorite)
          default:
            return notes
        }
      }
      return filter
    }
  }
})
