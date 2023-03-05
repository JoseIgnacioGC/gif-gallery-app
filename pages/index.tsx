import { useEffect } from 'react'
import { useSessionStorage } from 'react-use-storage'
import HeadTitle from '../frontend/components/elements/HeadTitle'
import GifGallery from '../frontend/components/gifs/GifGallery'
import NavBar from '../frontend/components/nav-bar/NavBar'
import { getAllGifs } from '../frontend/services/gifs/getAllGifs'
import { GifProps } from '../frontend/services/gifs/gifApi'

// import { Inter } from '@next/font/google'
// const inter = Inter({ subsets: ['latin'] })

type HomePageProps = { gifsWithProps: GifProps[] }
type Props = { props: HomePageProps }
const getServerSideProps = async (): Promise<Props> => {
  const { gifs } = await getAllGifs()
  const gifsWithProps = gifs
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
      <main>
        <p>trends...</p>
        <GifGallery
          firstImagePriority={true}
          gifsWithProps={gifsWithProps}
          searchQuery={'trends'}
        />
      </main>
    </>
  )
}

export { Home as default, getServerSideProps }
