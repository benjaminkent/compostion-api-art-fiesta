<template>
  <div class="art-detail-group">
    <div class="details">
      <p class="key">{{ props.detail }}:</p>
      <router-link class="link" v-if="props.id" :to="`/artist/${props.id}`">
        <p>{{ props.value }}</p>
      </router-link>
      <a
        v-else-if="props.url"
        :href="props.url"
        class="link"
        target="_blank"
        rel="noreferrer noopener"
        >{{ props.value }}</a
      >
      <p v-else>{{ props.value ? props.value : 'Unknown' }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    detail: String,
    id: Number,
    value: String,
    url: String,
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
