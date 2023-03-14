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
    <div className='flex justify-center'>
      <Image
        src={webpUrl ?? url}
        alt={title}
        width={Number(width)}
        height={Number(height)}
        priority={priority}
      />
    </div>
  )
}

export default GifImage
