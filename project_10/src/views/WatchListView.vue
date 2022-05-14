<template>
  <div>
    <h1>My Movie List</h1>
    <WatchListForm @create-movie-item="onCreateMovieItem" />
    <WatchList :movieList="movieList" />
  </div>
</template>

<script>
import WatchListForm from '@/components/WatchListForm'
import WatchList from '@/components/WatchList'

export default {
  name: 'WatchListView',
  data: function () {
    return {
      movieList : '',
    }
  },
  components:{
    WatchListForm,
    WatchList,
  },
  created(){
    this.movieList = JSON.parse(localStorage.getItem('movieList')) ?? []
  },
  methods: {
    onCreateMovieItem(movieItem){
      this.movieList.push(movieItem)
      this.saveMovieList()
    },
    saveMovieList(){
      localStorage.setItem('movieList', JSON.stringify(this.movieList))
    }
  },
}
</script>

<style>

</style>