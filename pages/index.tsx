import styles from '../styles/Home.module.css'
import Head from 'next/head'
import GifGallery from '../frontend/components/gifs/GifGallery'
import { getAllGifs, GifsProps } from '../frontend/services/gifs/getAllGifs'
import SearchBar from '../frontend/components/elements/SearchBar'
import WebLogo from '../frontend/components/elements/WebLogo'

// import { Inter } from '@next/font/google'
// const inter = Inter({ subsets: ['latin'] })

const Home = ({ gifArr = [] }: GifsProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className={styles.main}>
        <WebLogo />
        <span>GifWeb</span>
        <SearchBar placeholder='search...' />
        <GifGallery baseHref='/gif' gifArr={gifArr} />
      </main>
    </>
  )
}

const getServerSideProps = getAllGifs
export { getServerSideProps }

export default Home
