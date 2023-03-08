import GifImage from '../../frontend/components/gifs/GifImage'
import { getGifById } from '../../frontend/services/gifs/getGifById'
import { GifProps } from '../../frontend/services/gifs/gifApi'
import NavBar from '../../frontend/components/nav-bar/NavBar'
import GifGallery from '../../frontend/components/gifs/GifGallery'
import { getGifsBySearch } from '../../frontend/services/gifs/getGifsBySearch'
import HeadTitle from '../../frontend/components/elements/HeadTitle'
import { GetServerSidePropsContext } from 'next'
import GifInteractionButtons from '../../frontend/components/gifs/GifInteractionButtons'

type GifPageProps = { gifProps: GifProps, gifsWithProps: GifProps[] }
type Props = { props: GifPageProps }

const getServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<Props> => {
  const gifProps = await getGifById(context)
  const gifsWithProps = await getGifsBySearch(gifProps.title)
  return { props: { gifProps, gifsWithProps } }
}

const GifPage = ({ gifProps, gifsWithProps }: GifPageProps): JSX.Element => {
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
