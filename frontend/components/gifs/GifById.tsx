import Image from 'next/image'
import { GifProps } from '../../services/gifs/gifApi'

const GifImage = ({
  webpUrl,
  url,
  height,
  title,
  width
}: GifProps): JSX.Element => {
  return (
    <>
      <Image
        src={webpUrl ?? url}
        alt={title}
        width={Number(width)}
        height={Number(height)}
      />
    </>
  )
}

export default GifImage
