<template>
  <div v-if="!showLoading" class="home">
    <h3>Enjoy this random work of art!</h3>
    <div class="art-details-container">
      <div v-if="artInfo.peopleCount > 0" class="art-details">
        <art-detail-group
          v-for="(art, index) in artInfo.artDetails"
          :key="index"
          :detail="art.detail"
          :value="art.value"
          :link="art.link"
        />
      </div>
    </div>
    <img v-if="artInfo.image" class="image" :src="artInfo.image" />
    <h2 v-else>No artwork to display for this record</h2>
  </div>
  <div v-else>
    Loading a wonderful work of art...
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ArtDetailGroup from '@/components/ArtDetailGroup.vue'
import { useArt } from '@/composables/art'

export default Vue.extend({
  components: {
    ArtDetailGroup,
  },
  setup() {
    const { showLoading, artInfo } = useArt()

    return {
      showLoading,
      artInfo,
    }
  },
})
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  .image {
    margin: 20px 0 30px 0;
  }
}
</style>
