import { useEffect, useRef } from 'react'
import useGifs from '../../hooks/useGifs'
import useNearScreen from '../../hooks/useNearScreen'
import { GifProps } from '../../services/gifs/gifApi'
import Gif from './Gif'
import Masonry from 'react-masonry-css'

type Props = {
  gifsWithProps: GifProps[]
  firstImagePriority?: boolean
  galleryTitle: string
  searchQuery: string
}

const GifGallery = ({
  gifsWithProps = [],
  firstImagePriority = false,
  galleryTitle,
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
    <>
      <p className='text-black dark:text-slate-200 font-semibold text-xl py-2'>{galleryTitle}</p>
      <Masonry
        breakpointCols={2}
        className='flex gap-3'
        columnClassName='masonry-column'
      >
        {
          gifs.map((gifProps, index) => (
            <Gif
              key={index}
              {...gifProps}
              isPriority={index === 0 && firstImagePriority}
            />
          ))}
        <div ref={lastImageGalleryItem} />
      </Masonry>
    </>
  )
}

export default GifGallery
