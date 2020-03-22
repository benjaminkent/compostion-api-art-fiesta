<template>
  <div class="artist-page-container">
    <div class="artist-details">
      <card>
        <art-detail-group
          v-for="(artist, index) in showArtist.artistDetails"
          :key="index"
          :detail="artist.detail"
          :value="artist.value"
          :url="artist.url"
        />
      </card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { onMounted } from '@vue/composition-api'
import { useArt } from '@/composables/art'
import ArtDetailGroup from '@/components/ArtDetailGroup.vue'
import Card from '@/components/Card.vue'

export default Vue.extend({
  components: { ArtDetailGroup, Card },
  setup(props, context) {
    const { fetchArtist, showArtist } = useArt()

    onMounted(() => {
      fetchArtist(context.root.$route.params.id)
    })

    return {
      fetchArtist,
      showArtist,
    }
  },
})
</script>

<style lang="scss" scoped>
.artist-page-container {
  margin: 20px;
  .artist-details {
    display: flex;
  }
}
</style>
