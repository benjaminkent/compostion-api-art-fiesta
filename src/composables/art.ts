import { computed, onMounted, reactive, ref } from '@vue/composition-api'
import axios from 'axios'

const base = axios.create({
  baseURL: 'https://api.harvardartmuseums.org',
})

const API_KEY = process.env.VUE_APP_HARVARD_ART_API_KEY

export const useArt = () => {
  // State
  const artPiece: any = reactive({
    art: {
      records: [
        {
          people: [
            {
              name: '',
            },
          ],
        },
      ],
    },
  })
  const loading = ref(false)

  // Effectively getters
  const showLoading = computed(() => loading.value)
  const artInfo = computed(() => {
    return {
      peopleCount: artPiece.art.records[0].peoplecount,
      image: artPiece.art.records[0].primaryimageurl,
      artDetails: [
        {
          detail: 'Artist',
          value: artPiece.art.records[0].people[0]
            ? artPiece.art.records[0].people[0].name
            : 'Unknown',
          link: artPiece.art.records[0].people[0]
            ? artPiece.art.records[0].people[0].personid
            : 'Unknown',
        },
        {
          detail: 'Century',
          value: artPiece.art.records[0].century,
        },
        {
          detail: 'Culture',
          value: artPiece.art.records[0].culture,
        },
        {
          detail: 'Classification',
          value: artPiece.art.records[0].classification,
        },
      ],
    }
  })

  // Actions
  const fetchRandomArt = async () => {
    const response = await base.get(
      `/object?apikey=${API_KEY}&sort=random&size=1`
    )
    artPiece.art = response.data
    loading.value = false
  }

  onMounted(async () => {
    loading.value = true
    await fetchRandomArt()
  })

  return {
    showLoading,
    artInfo,
  }
}
