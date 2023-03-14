import { giphy, GifProps } from './gifApi'

const GIFS_LIMIT = 25
const MAX_RATING = 'r'

const getTrendingGifs = async (): Promise<GifProps[]> => {
  const res = await giphy.trending({ limit: GIFS_LIMIT, rating: MAX_RATING })
  const { data, meta } = res
  if (meta.msg !== 'OK') return []
  const gifs = data.map(gif => {
    const { title, id } = gif
    const { webp, url, width, height } = gif.images.original
    const webpUrl = webp ?? null
    return { title, id, webpUrl, url, width, height }
  })
  return gifs
}

export { getTrendingGifs }
