import { useRouter } from 'next/router'
import HeadTitle from '../../frontend/components/elements/HeadTitle'
import GifGallery from '../../frontend/components/gifs/GifGallery'
import NavBar from '../../frontend/components/nav-bar/NavBar'
import { getGifsBySearch } from '../../frontend/services/gifs/getGifsBySearch'
import { GifProps } from '../../frontend/services/gifs/gifApi'
import { removeHyphens } from '../../frontend/utils/handleSearchQuery'
import { GetServerSidePropsContext } from 'next'
import useRedirectToCorrectUrl from '../../frontend/hooks/useRedirectToCorrectUrl'

type SearchPageProps = {
  gifsWithProps: GifProps[]
}
type Props = {
  props: SearchPageProps | {}
  redirect?: { permanent: boolean; destination: string }
}

const getServerSideProps = async ({
  query
}: GetServerSidePropsContext): Promise<Props> => {
  const { searchQuery } = query
  if (typeof searchQuery !== 'string') return { props: {} }
  const gifsWithProps = await getGifsBySearch(searchQuery)
  return { props: { gifsWithProps } }
}

const SearchPage = ({ gifsWithProps = [] }: SearchPageProps): JSX.Element => {
  const router = useRouter()
  const { searchQuery } = router.query
  const validSearchQuery = typeof searchQuery === 'string' ? searchQuery : ''
  const searchQueryWithoutHyphens = removeHyphens(validSearchQuery)

  useRedirectToCorrectUrl(validSearchQuery)

  return (
    <>
      <HeadTitle title={searchQueryWithoutHyphens} withSuffix />
      <NavBar isSmall />
      <main>
        <section className='dark:bg-zinc-500 px-3'>
          <GifGallery
            firstImagePriority
            gifsWithProps={gifsWithProps}
            galleryTitle={`gifs related to "${searchQueryWithoutHyphens}"`}
            searchQuery={searchQueryWithoutHyphens}
          />
        </section>
      </main>
    </>
  )
}

export { SearchPage as default, getServerSideProps }
