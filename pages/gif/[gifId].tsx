import Head from 'next/head'
import SearchBar from '../../frontend/components/elements/SearchBar'
import WebLogo from '../../frontend/components/elements/WebLogo'
import GifImage from '../../frontend/components/gifs/GifById'
import { getGifById } from '../../frontend/services/gifs/getGifById'
import { GifProps } from '../../frontend/services/gifs/gifApi'

const GifPage = (gifProps: GifProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>{gifProps.title}</title>
      </Head>
      <main>
        <WebLogo />
        <SearchBar placeholder='search...' />
        <GifImage {...gifProps} />
      </main>
    </>
  )
}

const getServerSideProps = getGifById

export { getServerSideProps }
export default GifPage
