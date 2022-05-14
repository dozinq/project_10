<template>
  <div class="random">
    <button @click="getMovie">PICK</button>
    <div v-if="selectedMovie">
      <div class="d-flex justify-content-center width='50px'">
        <MovieCard :movieCard="selectedMovie" />
      </div>  
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
import _ from "lodash"
import MovieCard from '@/components/MovieCard.vue'

export default {
  name: "RandomView", 
  components: {
    MovieCard
  },
  data: function () {
    return {
      selectedMovie: '',
    };
  },
  computed: {
    ...mapState(["movieCards"]),
  },
  methods: {
    getMovie: function () {
      this.selectedMovie = _.sample(this.movieCards);
    },
  },
};
</script>