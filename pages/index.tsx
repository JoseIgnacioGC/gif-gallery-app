import { useEffect } from 'react'
import { useSessionStorage } from 'react-use-storage'
import HeadTitle from '../frontend/components/elements/HeadTitle'
import GifGallery from '../frontend/components/gifs/GifGallery'
import NavBar from '../frontend/components/nav-bar/NavBar'
import { getTrendingGifs } from '../frontend/services/gifs/getTrendingGifs'
import { GifProps } from '../frontend/services/gifs/gifApi'

// import { Inter } from '@next/font/google'
// const inter = Inter({ subsets: ['latin'] })

type HomePageProps = { gifsWithProps: GifProps[] }
type Props = { props: HomePageProps }
const getServerSideProps = async (): Promise<Props> => {
  const gifsWithProps = await getTrendingGifs()
  return { props: { gifsWithProps } }
}

const Home = ({ gifsWithProps }: HomePageProps): JSX.Element => {
  const [, setSearchQuery] = useSessionStorage('searchQuery')

  useEffect(() => {
    setSearchQuery('')
  }, [setSearchQuery])

  return (
    <>
      <HeadTitle title='Gif Web' />
      <NavBar />
      <main className='dark:bg-zinc-500 px-3'>
        <GifGallery
          firstImagePriority
          gifsWithProps={gifsWithProps}
          galleryTitle='trends...'
          searchQuery={'trends'}
        />
      </main>
    </>
  )
}

export { Home as default, getServerSideProps }
