<template>
  <div class="card-container">
    <div class="card">
      <slot />
    </div>
  </div>
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
.card-container {
  .card {
    padding: 25px 30px;
    border-radius: 6px;
    background-color: #eee;
    border: 1px solid $dark;
    box-shadow: 0 1px 10px #22222270;
  }
}
</style>
