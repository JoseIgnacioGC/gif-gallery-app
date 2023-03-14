import { useRouter } from 'next/router'
import { KeyboardEvent, useCallback, useState } from 'react'
import { useSessionStorage } from 'react-use-storage'
import useField from '../../hooks/useField'
import {
  removeHyphens,
  replaceSpecialCharacters
} from '../../utils/handleSearchQuery'
import { MdSearch } from 'react-icons/md'
import SearchSuggestions from './SearchSuggestions'

type Props = {
  placeholder?: string
  initialSearchValue?: string
}

const SearchBar = ({ placeholder }: Props): JSX.Element => {
  const [searchQuery, setSearchQuery] = useSessionStorage('searchQuery', '')
  const [searchBar] = useField({ type: 'search', initialValue: searchQuery })
  const [suggestionHidden, setSuggestionHidden] = useState(false)
  const router = useRouter()

  const routerPush = useCallback((): void => {
    const withoutSpecialCharacters = replaceSpecialCharacters(searchBar.value)
    if (withoutSpecialCharacters === '') return undefined
    setSearchQuery(removeHyphens(withoutSpecialCharacters))
    void router.push(`/search/${withoutSpecialCharacters}`)
  }, [router, searchBar.value, setSearchQuery])

  const handleSearchByEnter = useCallback(
    (e: KeyboardEvent): void => {
      e.key === 'Enter' && routerPush()
    },
    [routerPush]
  )

  const handleSearchByClick = useCallback((): void => {
    routerPush()
  }, [routerPush])

  const handleFocus = useCallback((e: React.FocusEvent): void => {
    e.type === 'focus'
      ? setSuggestionHidden(false)
      : setTimeout(() => {
          setSuggestionHidden(true)
        }, 200)
  }, [])

  return (
    <div className='relative min-w-min'>
      <div className='flex justify-center items-center bg-white dark:bg-slate-700 rounded-full mx-auto py-0 px-3'>
        <input
          className='min-w-0 w-full bg-transparent placeholder:text-gray-400 dark:text-slate-200 dark:placeholder:text-slate-400 focus-visible:outline-none'
          onKeyUp={handleSearchByEnter}
          placeholder={placeholder}
          {...searchBar}
          onFocus={handleFocus}
          onBlur={handleFocus}
        />
        <SearchSuggestions
          isHidden={suggestionHidden}
          searchQuery={searchBar.value}
        />
        <button
          className='translate-x-1 p-2'
          aria-label='Search gifs'
          onClick={handleSearchByClick}
        >
          <MdSearch className='text-gray-400 dark:text-slate-200 text-xl' />
        </button>
      </div>
    </div>
  )
}

export default SearchBar
