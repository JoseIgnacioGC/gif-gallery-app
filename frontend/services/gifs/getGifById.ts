import { GetServerSidePropsContext } from 'next'
import { toString } from '../../utils/handlePrimitiveValidators'
import { giphy, GifProps } from './gifApi'

const getGifById = async ({
  query
}: GetServerSidePropsContext): Promise<GifProps> => {
  try {
    const gifId = toString(query.gifId)
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
