import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import useGifs from '../../hooks/useGifs'
import useNearScreen from '../../hooks/useNearScreen'
import { GifProps } from '../../services/gifs/gifApi'

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
      {gifs.map(
        ({ webpUrl, url, height, title, width, id }, index) => (
          <Link key={index} href={`/gif/${id}`}>
            <Image
              src={webpUrl ?? url}
              alt={title}
              width={Number(width)}
              height={Number(height)}
              priority={index === 0 && firstImagePriority}
            />
          </Link>
        )
      )}
      <div ref={lastImageGalleryItem} />
    </div>
  )
}

export default GifGallery
