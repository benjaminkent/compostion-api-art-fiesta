<template>
  <div class="bread-container">
    <div class="bread">
      <ul>
        <li class="home crumb">
          <router-link v-if="route === 'artist'" to="/" class="link">
            Home
          </router-link>
          <p v-else>Home</p>
        </li>
        <li class="artist crumb" v-if="route === 'artist'">
          <p class="sep">\</p>
          <p>Artist</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { computed } from '@vue/composition-api'

export default Vue.extend({
  setup(props, context) {
    const route = computed(() => context.root.$route.name)

    return {
      route,
    }
  },
})
</script>

<style lang="scss" scoped>
.bread-container {
  margin: 20px;
  .bread {
    ul {
      display: flex;
      margin: 0;
      padding: 0;
      list-style-type: none;
      .crumb {
        p {
          margin: 0;
        }
      }
      .home {
        .link {
          color: $texas;
          text-decoration: none;
        }
      }
      .artist {
        display: flex;
        .sep {
          margin: 0 10px;
        }
      }
    }
  }
}
</style>
