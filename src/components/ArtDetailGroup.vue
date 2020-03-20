<template>
  <div class="art-detail-group">
    <div class="details">
      <p class="key">{{ props.detail }}:</p>
      <router-link class="link" v-if="props.link" to="/">
        <p>{{ props.value }}</p>
      </router-link>
      <p v-else>{{ props.value ? props.value : 'Unknown' }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    detail: String,
    link: Number,
    value: String,
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
    .link {
      color: $texas;
    }
    .link:hover {
      color: $deep;
    }
  }
}
</style>
