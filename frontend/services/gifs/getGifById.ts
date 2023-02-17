import { giphy, GifProps } from './gifApi'

type Query = { query: { gifId: string } }

const getGifById = async ({ query }: Query): Promise<GifProps> => {
  try {
    const { gifId } = query
    const res = await giphy.id(gifId)
    const { data } = res
    const { title, id } = data[0]
    const { webp: webpUrl, url, width, height } = data[0].images.original
    const props = { title, id, webpUrl, url, width, height }
    return props
  } catch (e) {
    throw new Error("bruh, I don't want handle a test")
  }
}

export { getGifById }
