import { giphy, GifProps } from './gifApi'

type Gif = GifProps | null

const getGifById = async (gifId: string): Promise<Gif> => {
  const res = await giphy.id(gifId)
  const { data, meta } = res
  if (meta.msg !== 'OK') return null
  const { title, id } = data[0]
  const { webp: webpUrl, url, width, height } = data[0].images.original
  const props = { title, id, webpUrl, url, width, height }
  return props
}

export { getGifById }
