<template>
  <div class="active row bg-gr">
    <h5>The active movie</h5>
  <!-- <movie v-for="(movieObj, index) in movies"
    :key="movieObj._id"
    :movieProp="movieObj"
    :movieIndex="index"
    /> -->
  </div>
</template>

<script>
import movie from "./Movie"
import style from "../assets/style.css"
export default {
  name: 'ActiveMovieChoice',
  props: ["movieProp"],
  methods: {
    setActive(){
      this.$store.dispatch("chooseMovie", this.movieProp);
    }
  },
  components: {
    movie
  }
}