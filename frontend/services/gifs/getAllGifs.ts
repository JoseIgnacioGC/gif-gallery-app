import { giphy, GifProps } from './gifApi'

export type GifsProps = { gifArr?: GifProps[] }
type Props = { props: GifsProps }

const getAllGifs = async (): Promise<Props> => {
  try {
    const res = await giphy.trending({ limit: 25, rating: 'r' })
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
    return {
      props: {
        gifArr: gifsWithProps
      }
    }
  } catch (e) {
    throw new Error("bruh, I don't want handle a test")
  }
}

export { getAllGifs }
