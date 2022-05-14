<template>
  <div>
    <input v-model.trim="title" type="text" @keyup.enter="createMovie">
    <button @click="createMovie">Add</button>
  </div>
</template>

<script>
import {v4 as uuidv4} from 'uuid'

export default {
  name: 'WatchListForm',
  data: function () {
    return {
      movieTitle: '',
    }
  },
  methods: {
    createMovie(){
      if (!this.title) {
        return  
      }

      const movieItem = {
        id: uuidv4(),
        title: this.title    
      }

      this.$emit('create-movie-item', movieItem)
      this.clearInput()
    },
    clearInput() {
      this.title = ''
    }
  }
}
    

</script>

<style>

</style>