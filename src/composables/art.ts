import { computed, onMounted, reactive, ref } from '@vue/composition-api'
import axios from 'axios'

const base = axios.create({
  baseURL: 'https://api.harvardartmuseums.org',
})

const API_KEY = process.env.VUE_APP_HARVARD_ART_API_KEY

export const useArt = () => {
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

  const showArt = computed(() => artPiece.art)
  const showLoading = computed(() => loading.value)

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
    showArt,
    showLoading,
  }
}
