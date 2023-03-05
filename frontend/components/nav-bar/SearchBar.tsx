import { useRouter } from 'next/router'
import { KeyboardEvent, useCallback } from 'react'
import { useSessionStorage } from 'react-use-storage'
import useField from '../../hooks/useField'
import { removeHyphens, replaceSpecialCharacters } from '../../utils/searchQueryUtils'

type Props = { placeholder?: string, initialSearchValue?: string }

const SearchBar = ({ placeholder }: Props): JSX.Element => {
  const [searchQuery, setSearchQuery] = useSessionStorage('searchQuery', '')
  const [searchBar] = useField({ type: 'search', initialValue: searchQuery })
  const router = useRouter()

  const routerPush = useCallback((): void => {
    const withoutSpecialCharacters = replaceSpecialCharacters(searchBar.value)
    if (withoutSpecialCharacters === '') return undefined
    setSearchQuery(removeHyphens(withoutSpecialCharacters))
    void router.push(`/search/${withoutSpecialCharacters}`)
  }, [router, searchBar.value, setSearchQuery])

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
