import axios from 'axios'

const harvardBase = axios.create({
  baseURL: 'https://api.harvardartmuseums.org',
})

const API_KEY = `?apikey=${process.env.VUE_APP_HARVARD_ART_API_KEY}`

export { harvardBase, API_KEY }
