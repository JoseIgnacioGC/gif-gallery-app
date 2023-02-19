import Image from 'next/image'
import { GifProps } from '../../services/gifs/gifApi'

type Props = GifProps & { priority?: boolean }

const GifImage = ({
  webpUrl,
  url,
  height,
  title,
  width,
  priority = false
}: Props): JSX.Element => {
  return (
    <>
      <Image
        src={webpUrl ?? url}
        alt={title}
        width={Number(width)}
        height={Number(height)}
        priority={priority}
      />
    </>
  )
}

export default GifImage
