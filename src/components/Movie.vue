<template>
  <div class="activeMovie bg-blue">
    <div class="card">
      <img :src="`https://image.tmdb.org/t/p/w500/${movieProp.poster_path}`" class="card-img-top" @click="setActive">
      <div class="card-body bg-blue">
        <h1 class="card-title">{{movieProp.title}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import style from "../assets/style.css"
export default {
  name: 'Movie',
  props: ["movieProp"],
  methods: {
    setActive() {
      this.$store.dispatch("setActiveMovie", this.movieProp)
    }
  }
}
</script>
<style scoped>
  img{height:auto; width:100%}
</style>