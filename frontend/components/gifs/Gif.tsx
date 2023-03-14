import Image from 'next/image'
import Link from 'next/link'
import { memo } from 'react'
import { GifProps } from '../../services/gifs/gifApi'

type Props = GifProps & { isPriority: boolean }

const Gif = ({
  webpUrl,
  url,
  title,
  id,
  width,
  height,
  isPriority
}: Props): JSX.Element => {
  return (
    <Link href={`/gif/${id}`}>
      <Image
        src={webpUrl ?? url}
        alt={title}
        width={Number(width)}
        height={Number(height)}
        priority={isPriority}
        className='bg-steel-teal'
      />
    </Link>
  )
}

export default memo(Gif, ({ id: prevId }, { id: nextId }) => prevId === nextId)
