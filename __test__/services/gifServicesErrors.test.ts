import '../../__mocks__/gifApiError'
import { getTrendingGifs } from '../../frontend/services/gifs/getTrendingGifs'
import { getGifById } from '../../frontend/services/gifs/getGifById'
import { getGifsBySearch } from '../../frontend/services/gifs/getGifsBySearch'
import gifProps from '../utils/gifProps'

describe('Api error', () => {
  it('get trends should return an empty array', async () => {
    const gifs = await getTrendingGifs()
    expect(gifs).toHaveLength(0)
  })

  it('get gif by id should return null', async () => {
    const gif = await getGifById(gifProps.id)
    expect(gif).toBeNull()
  })

  it('get by serach should return an empty array', async () => {
    const gifs = await getGifsBySearch('hola')
    expect(gifs).toHaveLength(0)
  })
})
