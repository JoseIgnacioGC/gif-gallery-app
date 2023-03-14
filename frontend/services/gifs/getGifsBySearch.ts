import { validateSearchQuery } from '../../utils/handleSearchQuery'
import { giphy, GifProps } from './gifApi'

type SearchOptions = { offset?: number }

const GIFS_LIMIT = 25
const MAX_RATING = 'r'
const DEFAULT_OFFSET = 0

const getGifsBySearch = async (
  searchQuery: string,
  { offset = DEFAULT_OFFSET }: SearchOptions = {}
): Promise<GifProps[]> => {
  const res = await giphy.search({
    q: validateSearchQuery(searchQuery),
    limit: GIFS_LIMIT,
    offset,
    rating: MAX_RATING
  })
  const { data, meta } = res
  if (meta.msg !== 'OK') return []
  const gifsWithProps = data.map(gif => {
    const { title, id } = gif
    const { webp, url, width, height } = gif.images.original
    const webpUrl = webp ?? null
    return { title, id, webpUrl, url, width, height }
  })
  return gifsWithProps
}

export { getGifsBySearch }
