import { useEffect, useState } from 'react'
import { getGifsBySearch } from '../services/gifs/getGifsBySearch'
import { GifProps } from '../services/gifs/gifApi'

type UseGifs = {
  gifs: GifProps[]
  isLoading: boolean
  error: null | Error
  getMoreGifs: () => void
}

const useGifs = (searchQuery: string, initialState: GifProps[]): UseGifs => {
  const [gifs, setGifs] = useState(initialState)
  const [isLoading, setIsLoading] = useState(false)
  const [loadMoreGifs, setLoadMoreGifs] = useState(false)
  const [error, setError] = useState(null)

  const getMoreGifs = (): void => {
    setLoadMoreGifs(true)
  }

  useEffect(() => {
    setGifs(initialState)
  }, [initialState])

  useEffect(() => {
    if (!loadMoreGifs) return undefined
    setIsLoading(true)
    setLoadMoreGifs(false)
    getGifsBySearch(searchQuery, { offset: gifs.length })
      .then(gifsBySearch => {
        setGifs(previousGifs => [...previousGifs, ...gifsBySearch])
        setIsLoading(false)
      })
      .catch(setError)
  }, [loadMoreGifs, searchQuery, gifs.length])

  return { gifs, getMoreGifs, isLoading, error }
}

export default useGifs
