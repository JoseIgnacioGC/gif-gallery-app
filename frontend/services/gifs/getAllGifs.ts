import { giphy, GifProps } from './gifApi'

const GIFS_LIMIT = 25
const MAX_RATING = 'r'

const getAllGifs = async (): Promise<GifProps[]> => {
  try {
    const res = await giphy.trending({ limit: GIFS_LIMIT, rating: MAX_RATING })
    const { data } = res
    const gifsWithProps = data
      .map(gif => {
        const { title, id } = gif
        const { webp, url, width, height } = gif.images.original
        const webpUrl = webp ?? null
        return { title, id, webpUrl, url, width, height }
      })
      .filter(({ id }, index, arr) =>
        arr.every(
          ({ id: mapId }, mapIndex) => mapIndex === index || id !== mapId
        )
      )
    return gifsWithProps
  } catch (e) {
    throw new Error("bruh, I don't want handle a test")
  }
}

export { getAllGifs }
