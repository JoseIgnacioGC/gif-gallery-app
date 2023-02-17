import GifImage from '../../frontend/components/gifs/GifById'
import { getGifById } from '../../frontend/services/gifs/getGifById'
import { GifProps } from '../../frontend/services/gifs/gifApi'
import NavBar from '../../frontend/components/nav-bar/NavBar'
import GifGallery from '../../frontend/components/gifs/GifGallery'
import { getGifsBySearch } from '../../frontend/services/gifs/getGifsBySearch'
import HeadTitle from '../../frontend/components/elements/HeadTitle'

type GifPageProps = { gifProps: GifProps, gifsWithProps: GifProps[] }

const GifPage = ({ gifProps, gifsWithProps }: GifPageProps): JSX.Element => {
  return (
    <>
      <HeadTitle title={gifProps.title} />
      <NavBar />
      <main>
        <GifImage priority={true} {...gifProps} />
        <button>*copy link*</button>
        <button>*download*</button>
      </main>
      <section>
        <p>Similar to this...</p>
        <GifGallery
          firstImagePriority={true}
          gifsWithProps={gifsWithProps}
          searchQuery={gifProps.title}
        />
      </section>
    </>
  )
}

type Context = { query: { gifId: string } }
type Props = { props: Record<string, unknown> }
const getServerSideProps = async (context: Context): Promise<Props> => {
  const gifProps = await getGifById(context)
  const gifsWithProps = await getGifsBySearch(gifProps.title)
  return { props: { gifProps, gifsWithProps } }
}

export { GifPage as default, getServerSideProps }
