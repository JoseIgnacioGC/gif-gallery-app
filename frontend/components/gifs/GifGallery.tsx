import { useEffect, useRef } from 'react'
import useGifs from '../../hooks/useGifs'
import useNearScreen from '../../hooks/useNearScreen'
import { GifProps } from '../../services/gifs/gifApi'
import Gif from './Gif'

type Props = {
  gifsWithProps: GifProps[]
  firstImagePriority?: boolean
  searchQuery: string
}

const GifGallery = ({
  gifsWithProps = [],
  firstImagePriority = false,
  searchQuery
}: Props): JSX.Element => {
  const lastImageGalleryItem = useRef<HTMLDivElement>(null)
  const { gifs, getMoreGifs, isLoading } = useGifs(searchQuery, gifsWithProps)
  const { isNearScreen } = useNearScreen<HTMLDivElement>({
    externalRef: isLoading ? null : lastImageGalleryItem
  })

  useEffect(() => {
    if (isNearScreen) getMoreGifs()
  }, [isNearScreen, getMoreGifs])

  return (
    <div>
      {gifs.map((gifProps, index) => (
        <Gif
          key={index}
          {...gifProps}
          isPriority={index === 0 && firstImagePriority}
        />
      ))}
      <div ref={lastImageGalleryItem} />
    </div>
  )
}

export default GifGallery
