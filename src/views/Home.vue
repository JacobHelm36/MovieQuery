<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col text-center">
        <movieSearch/>
      </div>
      <div class="col text-center">
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
