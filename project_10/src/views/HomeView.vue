<template>
  <div class="text-center">
    <div style="padding-left: 300px; padding-right: 300px" class="row row-cols-3">
      <MovieCard v-for="movieCard in movieCards" :key="movieCard.id" :movieCard="movieCard" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
import MovieCard from '@/components/MovieCard'

export default {
  name: 'HomeView',
  components: {
    MovieCard,
  },
  computed: {
    ...mapState(["movieCards"]),
  },
}
</script>
