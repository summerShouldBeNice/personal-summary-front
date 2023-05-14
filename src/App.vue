<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
/*重置样式*/
html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
