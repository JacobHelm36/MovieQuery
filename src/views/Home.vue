<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col text-center">
        <h1>Search for movies by title</h1>
        <movieSearch/>
      </div>
      <div class="col text-center">
        <h5>The active movie</h5>
        <activeMovie/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ActiveMovie from '@/components/ActiveMovie.vue'
import MovieSearch from '@/components/MovieSearch.vue'
export default {
  name: 'Home',
  components: {
    ActiveMovie,
    MovieSearch
  }
}
</script>
