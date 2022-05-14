<template>
  <div>
    <h2>{{ movie.title }}</h2>
  </div>
</template>

<script>


export default {
  name: 'WatchListItem',
  props: {
    movie: Object,
  },
}
</script>

<style>

</style>