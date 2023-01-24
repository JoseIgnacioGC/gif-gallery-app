import Image from 'next/image'
import Link from 'next/link'
import { GifsProps } from '../../services/gifs/getAllGifs'

type Props = GifsProps & {
  baseHref: string
}

const GifGallery = ({ gifArr = [], baseHref }: Props): JSX.Element => {
  return (
    <>
      {gifArr.map(({ webpUrl, url, height, title, width, id }) => (
        <Link key={id} href={`${baseHref}/${id}`} >
          <Image
            src={webpUrl ?? url}
            alt={title}
            width={Number(width)}
            height={Number(height)}
          />
        </Link>
      )
      )}
    </>
  )
}

export default GifGallery
