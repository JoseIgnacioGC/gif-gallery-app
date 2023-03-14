import GifImage from '../../frontend/components/gifs/GifImage'
import { getGifById } from '../../frontend/services/gifs/getGifById'
import { GifProps } from '../../frontend/services/gifs/gifApi'
import NavBar from '../../frontend/components/nav-bar/NavBar'
import GifGallery from '../../frontend/components/gifs/GifGallery'
import { getGifsBySearch } from '../../frontend/services/gifs/getGifsBySearch'
import HeadTitle from '../../frontend/components/elements/HeadTitle'
import { GetServerSidePropsContext } from 'next'
import GifInteractionButtons from '../../frontend/components/gifs/GifInteractionButtons'
import { toString } from '../../frontend/utils/handlePrimitiveValidators'

type GifPageProps = { gifProps: GifProps | null; gifsWithProps: GifProps[] }
type Props = { props: GifPageProps | {}; redirect?: Record<string, unknown> }

const getServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<Props> => {
  const gifId = toString(context.query.gifId)
  const gifProps = await getGifById(gifId)
  if (gifProps === null) {
    return {
      redirect: {
        permanent: false,
        destination: '/'
      },
      props: {}
    }
  }
  const gifsWithProps = await getGifsBySearch(gifProps.title)
  return { props: { gifProps, gifsWithProps } }
}

const GifPage = ({
  gifProps = null,
  gifsWithProps = []
}: GifPageProps): JSX.Element => {
  if (gifProps === null) return <></>

  return (
    <>
      <HeadTitle title={gifProps.title} withSuffix />
      <NavBar isSmall />
      <main className='bg-eggshell dark:bg-slate-600 flex flex-col pt-10'>
        <GifImage priority {...gifProps} />
        <GifInteractionButtons
          imgTitle={gifProps.title}
          imgUrl={gifProps.url}
        />
      </main>
      <section className='dark:bg-zinc-500 px-3'>
        <GifGallery
          firstImagePriority
          gifsWithProps={gifsWithProps}
          galleryTitle='Similar to this...'
          searchQuery={gifProps.title}
        />
      </section>
    </>
  )
}

export { GifPage as default, getServerSideProps }
