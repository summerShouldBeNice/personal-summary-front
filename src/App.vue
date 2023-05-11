<template>
  <div id="app">
    <Index/>
  </div>
</template>

<script>
import {BASE_URL} from '@/config/constants'
import Index from '@/views/Index.vue'
export default {
  name: 'App',
  mounted () {
    console.log(BASE_URL)
  },
  components: {
    Index
  }
}
</script>

<style>
html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
