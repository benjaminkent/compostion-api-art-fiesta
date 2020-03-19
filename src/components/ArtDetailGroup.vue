<template>
  <div v-if="peopleCount > 0" class="art-detail-group">
    <div class="details">
      <p class="key">{{ props.detail }}:</p>
      <router-link v-if="props.link" to="/">
        <p>{{ props.value }}</p>
      </router-link>
      <p v-else>{{ props.value }}</p>
    </div>
  </div>
  <div v-else>
    <h3>No artist details for this record.</h3>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    detail: String,
    link: Number,
    value: String,
    peopleCount: Number,
  },
  setup(props) {
    return {
      props,
    }
  },
})
</script>

<style lang="scss" scoped>
.art-detail-group {
  display: flex;
  justify-content: flex-start;
  .details {
    display: flex;
    p {
      margin: 0;
    }
    .key {
      margin-right: 7px;
    }
  }
}
</style>
