import giphyApi from 'giphy-api'

const GIPHY_API_KEY = process.env.GIPHY_API_KEY
const giphy = giphyApi(GIPHY_API_KEY)

type PropsKeys = 'title' | 'id' | 'webpUrl' | 'url' | 'width' | 'height'
export type GifProps = {
  [key in PropsKeys]: key extends 'webpUrl' ? null | string : string
}

export { giphy }
