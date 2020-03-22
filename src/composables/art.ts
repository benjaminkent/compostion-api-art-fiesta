import { computed, reactive, ref } from '@vue/composition-api'
import axios from 'axios'

const base = axios.create({
  baseURL: 'https://api.harvardartmuseums.org',
})

const API_KEY = process.env.VUE_APP_HARVARD_ART_API_KEY

export const useArt = () => {
  // State
  // eslint-disable-next-line
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
  const artist = reactive({
    artistDetails: {
      displayname: '',
      birthplace: '',
      deathplace: '',
      yearsActive: '',
      culture: '',
      url: '',
    },
  })

  // Effectively getters
  const showLoading = computed(() => loading.value)
  const showArtist = computed(() => {
    return {
      artistDetails: [
        { detail: 'Name', value: artist.artistDetails.displayname },
        { detail: 'Birth place', value: artist.artistDetails.birthplace },
        { detail: 'Place of death', value: artist.artistDetails.deathplace },
        { detail: 'Years active', value: artist.artistDetails.yearsActive },
        { detail: 'Culture', value: artist.artistDetails.culture },
        {
          detail: 'Collections',
          value: 'View artist collections on the Harvard website',
          url: artist.artistDetails.url,
        },
      ],
    }
  })
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

  const fetchArtist = async (id: string) => {
    const response = await base.get(`/person/${id}?apikey=${API_KEY}`)
    artist.artistDetails = response.data
  }

  return {
    showLoading,
    artInfo,
    showArtist,
    fetchArtist,
    fetchRandomArt,
  }
}
