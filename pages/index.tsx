import HeadTitle from '../frontend/components/elements/HeadTitle'
import GifGallery from '../frontend/components/gifs/GifGallery'
import NavBar from '../frontend/components/nav-bar/NavBar'
import { getAllGifs } from '../frontend/services/gifs/getAllGifs'
import { GifProps } from '../frontend/services/gifs/gifApi'

// import { Inter } from '@next/font/google'
// const inter = Inter({ subsets: ['latin'] })

type GifPageProps = { gifsWithProps: GifProps[] }
const Home = ({ gifsWithProps = [] }: GifPageProps): JSX.Element => {
  return (
    <>
      <HeadTitle title='Create Next App' />
      <main>
        <NavBar />
        <GifGallery
          firstImagePriority={true}
          gifsWithProps={gifsWithProps}
          searchQuery={'trends'}
        />
      </main>
    </>
  )
}

type Props = { props: Record<string, unknown> }
const getServerSideProps = async (): Promise<Props> => {
  const gifsWithProps = await getAllGifs()
  return { props: { gifsWithProps } }
}

export { Home as default, getServerSideProps }
