<template>
  <div id="app">
    <app-header />
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppHeader from '@/components/AppHeader.vue'

export default Vue.extend({
  components: {
    AppHeader,
  },
  setup() {
    return {}
  },
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $black;
}

body {
  margin: 0;
}
</style>
