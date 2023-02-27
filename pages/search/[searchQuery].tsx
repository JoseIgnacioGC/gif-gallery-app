import { useRouter } from 'next/router'
import HeadTitle from '../../frontend/components/elements/HeadTitle'
import GifGallery from '../../frontend/components/gifs/GifGallery'
import NavBar from '../../frontend/components/nav-bar/NavBar'
import { getGifsBySearch } from '../../frontend/services/gifs/getGifsBySearch'
import { GifProps } from '../../frontend/services/gifs/gifApi'
import {
  replaceEscapedCharacters,
  urlHaveEscapedCharacters
} from '../../frontend/utils/escapeUrl'

type SearchPageProps = { gifsWithProps: GifProps[] }
const SearchPage = ({ gifsWithProps }: SearchPageProps): JSX.Element => {
  const router = useRouter()
  const { searchQuery } = router.query
  const searchQueryStr =
    typeof searchQuery === 'string' ? searchQuery.replace(/-/g, ' ') : ''

  return (
    <>
      <HeadTitle title={searchQueryStr} withSuffix={true} />
      <main>
        <NavBar />
        <p>gifs related to {`"${searchQueryStr}"`}</p>
        <GifGallery
          firstImagePriority={true}
          gifsWithProps={gifsWithProps}
          searchQuery={'trends'}
        />
      </main>
    </>
  )
}

type Context = { query: { searchQuery: string } }
type Props = {
  props: Record<string, unknown>
  redirect?: { permanent: boolean, destination: string }
}
const getServerSideProps = async ({ query }: Context): Promise<Props> => {
  const { searchQuery } = query
  if (!urlHaveEscapedCharacters(searchQuery)) {
    const gifsWithProps = await getGifsBySearch(searchQuery)
    return { props: { gifsWithProps } }
  }
  return {
    redirect: {
      permanent: false,
      destination: `/search/${replaceEscapedCharacters(searchQuery)}`
    },
    props: {}
  }
}

export { SearchPage as default, getServerSideProps }
