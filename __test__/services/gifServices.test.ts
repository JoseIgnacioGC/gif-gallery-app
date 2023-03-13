import { getTrendingGifs } from '../../frontend/services/gifs/getTrendingGifs'
import { getGifById } from '../../frontend/services/gifs/getGifById'
import { getGifsBySearch } from '../../frontend/services/gifs/getGifsBySearch'
import gifProps from '../utils/gifProps'

describe('Api works correctly', () => {
  it('get trends should return gifs', async () => {
    const gifs = await getTrendingGifs()
    expect(gifs).toHaveLength(25)
  })

  it('get gif by id should return a gif', async () => {
    const gif = await getGifById(gifProps.id)
    expect(gif?.title).toEqual(gifProps.title)
  })

  it('get by search should return gifs', async () => {
    const gifs = await getGifsBySearch('hola')
    expect(gifs).toHaveLength(25)
  })
})
