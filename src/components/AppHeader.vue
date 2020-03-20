<template>
  <header>
    <h2>Harvard Art - Working with the Vue Composition API</h2>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  setup() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
header {
  padding: 8px 0;
  background-color: $primary;
  h2 {
    margin: 0 0 0 20px;
    color: $white;
  }
}
</style>
