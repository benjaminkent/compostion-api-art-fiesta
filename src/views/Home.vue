<template>
  <div v-if="!showLoading" class="home">
    <h3>Enjoy this random work of art!</h3>
    <div class="art-details-container">
      <div class="art-details">
        <art-detail-group
          :detail="'Artist'"
          :value="showArt.records[0].people[0].name"
          :link="showArt.records[0].people[0].personid"
          :people-count="showArt.records[0].peoplecount"
        />
        <art-detail-group
          :detail="'Century'"
          :value="showArt.records[0].century"
          :people-count="showArt.records[0].peoplecount"
        />
        <art-detail-group
          :detail="'Culture'"
          :value="showArt.records[0].culture"
          :people-count="showArt.records[0].peoplecount"
        />
        <art-detail-group
          :detail="'Classification'"
          :value="showArt.records[0].classification"
          :people-count="showArt.records[0].peoplecount"
        />
      </div>
    </div>
    <img
      v-if="showArt.records[0].primaryimageurl"
      class="image"
      :src="showArt.records[0].primaryimageurl"
    />
    <h2 v-else>Sad face :( No artwork to display for this record</h2>
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
    const { showArt, showLoading } = useArt()

    return {
      showArt,
      showLoading,
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
