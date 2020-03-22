<template>
  <div id="app">
    <app-header />
    <bread-crumb />
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import BreadCrumb from '@/components/BreadCrumb.vue'

export default Vue.extend({
  components: {
    AppHeader,
    BreadCrumb,
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
