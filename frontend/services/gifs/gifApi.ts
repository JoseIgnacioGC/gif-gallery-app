import giphyApi from 'giphy-api'

const GIPHY_API_KEY = process.env.NEXT_PUBLIC_GIPHY_API_KEY
const giphy = giphyApi(GIPHY_API_KEY)

type GifKeys = 'title' | 'id' | 'webpUrl' | 'url' | 'width' | 'height'
export type GifProps = {
  [key in GifKeys]: key extends 'webpUrl' ? null | string : string
}

export { giphy }
