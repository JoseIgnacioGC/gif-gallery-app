import { useState, useEffect, useCallback } from 'react'
import { useSessionStorage } from 'react-use-storage'
import {
  toTheMaximumLength,
  removeLastWord
} from '../../utils/handleSuggestions'
import {
  removeHyphens,
  replaceSpecialCharacters
} from '../../utils/handleSearchQuery'
import { useRouter } from 'next/router'
import { miniSearch } from '../../services/search/miniSearch'

type Props = { searchQuery: string; isHidden: boolean }

const SearchSuggestions = ({ searchQuery, isHidden }: Props): JSX.Element => {
  const [, setSearchQuery] = useSessionStorage('searchQuery', '')
  const [suggestions, setSuggestions] = useState<string[]>([])
  const router = useRouter()

  useEffect(() => {
    const suggestionProcessed = miniSearch
      .autoSuggest(searchQuery.split(' ').at(-1) as string)
      .slice(2, 8)
      .map(({ suggestion }) => removeLastWord(suggestion, searchQuery))
    setSuggestions(suggestionProcessed)
  }, [searchQuery])

  const routerPush = useCallback(
    (suggestion: string): void => {
      const link = replaceSpecialCharacters(suggestion)
      setSearchQuery(removeHyphens(link))
      void router.push(`/search/${link}`)
    },
    [router, setSearchQuery]
  )

  const handleClick = useCallback(
    (suggestion: string) => (): void => {
      routerPush(suggestion)
    },
    [routerPush]
  )

  return (
    <ul
      className={
        'bg-white shadow-xl absolute rounded-md top-0 left-1/2 -translate-x-1/2 mt-11 w-64 ' +
        (isHidden ? 'hidden' : '')
      }
    >
      {suggestions.map((suggestion, index) => {
        return (
          <li
            className='focus:bg-blue-200 hover:bg-gray-100 px-2 py-0.5 focus:outline-none cursor-default'
            onClick={handleClick(suggestion)}
            key={index}
          >
            {toTheMaximumLength(suggestion)}
          </li>
        )
      })}
    </ul>
  )
}

export default SearchSuggestions
