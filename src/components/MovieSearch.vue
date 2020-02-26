<template>
  <div class="search row bg-blue">
    <h4>Search for movies by title</h4>
      
    <input v-model="query"/>
    <button class="btn btn-warning" @click="searchQuery()">search</button>
  <movie v-for="(movieObj, index) in movies"
    :key="movieObj._id"
    :movieProp="movieObj"
    :movieIndex="index"
    />
  </div>
</template>

<script>
import Movie from "./Movie"
import colors from "../assets/style.css"
export default {
  name: 'MovieSearch',
  data() {
    return {
      query:""
    }
  },
  methods: {
    searchQuery() {
      this.$store.dispatch("getMovies", this.query)
    }
  },
  computed: {
    movies() {
      return this.$store.state.movies
    }
  },
  components: {
    Movie
  }

}
</script>