<template>
  <header>
    <router-link :to="route === '/' ? '#' : '/'" class="home-link">
      <h2>Harvard Art - Working with the Vue Composition API</h2>
    </router-link>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import { computed } from '@vue/composition-api'

export default Vue.extend({
  setup(props, context) {
    const route = computed(() => context.root.$route.path)

    return {
      route,
    }
  },
})
</script>

<style lang="scss" scoped>
header {
  padding: 8px 0;
  background-color: $primary;
  display: flex;
  .home-link {
    text-decoration: none;
    color: $white;
  }
  h2 {
    margin: 0 0 0 20px;
  }
}
</style>
