import { useRouter } from 'next/router'
import { KeyboardEvent, useCallback } from 'react'
import useField from '../../hooks/useField'
import { replaceSpecialCharacters } from '../../utils/escapeUrl'

type Props = { placeholder?: string, initialSearchValue?: string }

const SearchBar = ({ placeholder }: Props): JSX.Element => {
  const router = useRouter()
  const searchQuery = router?.query?.searchQuery
  const searchQueryStr = typeof searchQuery === 'string' ? searchQuery.replace(/-/g, ' ') : ''
  const [searchBar] = useField({ type: 'search', initialValue: searchQueryStr })

  const routerPush = useCallback((): void => {
    const searchQuery = replaceSpecialCharacters(searchBar.value)
    searchQuery !== '' && router.push(`/search/${searchQuery}`)
  }, [router, searchBar.value])

  const handleSearchByKey = useCallback(
    (e: KeyboardEvent): void => {
      e.key === 'Enter' && routerPush()
    },
    [routerPush]
  )

  const handleSearchByClick = useCallback((): void => {
    routerPush()
  }, [routerPush])

  return (
    <>
      <input
        onKeyUp={handleSearchByKey}
        placeholder={placeholder}
        {...searchBar}
      />
      <button aria-label='Search gifs' onClick={handleSearchByClick}>
        *lupa*
      </button>
    </>
  )
}

export default SearchBar
