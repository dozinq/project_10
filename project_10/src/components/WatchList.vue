<template>
  <div>
    <WatchListItem v-for="movie in movieList" :key="movie.id" :movie="movie"/>
  </div>
</template>

<script>
import WatchListItem from './WatchListItem.vue'

export default {
  name: 'WatchList',
  components: {
    WatchListItem
  },
  props: {
    movieList: Array 
  },
}
</script>

<style>

</style>