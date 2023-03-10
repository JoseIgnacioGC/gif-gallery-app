import { useRouter } from 'next/router'
import { KeyboardEvent, useCallback } from 'react'
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

  return (
    <div className='relative w-fit'>
      <div className='flex justify-center items-center w-fit bg-white dark:bg-slate-700 rounded-full mx-auto py-0 px-3'>
        <input
          className='bg-transparent placeholder:text-gray-400 dark:text-slate-200 dark:placeholder:text-slate-400 focus-visible:outline-none w-60'
          onKeyUp={handleSearchByEnter}
          placeholder={placeholder}
          {...searchBar}
        />
        <SearchSuggestions
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
