<template>
  <div id="movie-list">
    <div v-if="filteredMovies.length">
      <movie-item v-for="movie in filteredMovies"
        class="movie" v-bind:movie="movie.movie">
        <div class="movie-sessions">
          <div
            v-for="session in filteredSessions(movie.sessions)"
            class="session-time-wrapper tooltip-wrapper"
            v-tooltip="{ seats: session.seats }"
          >
            <div class="session-time">{{ formatSessionTime(session.time) }}</div>
          </div>
        </div>
      </movie-item>
    </div>
    <div v-else-if="movies.length" class="no-results">
      {{ noResults }}
    </div>
    <div v-else class="no-results">
      Loading ...
    </div>
  </div>
</template>

<script>
  import MovieItem from './MovieItem.vue'
  import times from '../util/times';
  import genres from '../util/genres';

  export default {
    props: ['genre', 'time', 'movies', 'day'],
    computed: {
      filteredMovies() {
        return this.movies
          .filter(this.moviesPassesGenreFilter)
          .filter(movie => movie.sessions.find(this.sessionPassesTimeFilter))
      },
      noResults() {
        const times = this.time.join(', ');
        const genres = this.genre.join(', ');
        return `No results for ${times}${times.length && genres.length ? ', ' : ''}${genres}`
      }
    },
    methods: {
      formatSessionTime(raw) {
        return this.$moment(raw).format('h:mm A');
      },
      filteredSessions(sessions) {
        return sessions.filter(this.sessionPassesTimeFilter);
      },
      moviesPassesGenreFilter(movie) {
        if (!this.genre.length) {
          return true;
        }
        const moviesGenres = movie.movie.Genre.split(', ');
        return this.genre.every(genre =>
          moviesGenres.some(movieGenre =>
            movieGenre === genre));
      },
      sessionPassesTimeFilter(session) {
        if (!this.day.isSame(this.$moment(session.time), 'day')) {
          return false;
        } else if (this.time.length === 0 || this.time.length === 2) {
          return true;
        } else if (this.time[0] === times.AFTER_6PM) {
          return this.$moment(session.time).hour() >= 18;
        } else {
          return this.$moment(session.time).hour() < 18;
        }
      }
    },
    components: {
      MovieItem
    }
  }
</script>
