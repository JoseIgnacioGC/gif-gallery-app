import words from 'an-array-of-english-words'
import MiniSearch from 'minisearch'
import { useState, useEffect } from 'react'
import { useSessionStorage } from 'react-use-storage'
import { processSuggestion } from '../../utils/handleSuggestions'
import {
  removeHyphens,
  replaceSpecialCharacters
} from '../../utils/handleSearchQuery'
import { useRouter } from 'next/router'

const englishWords = words.map((word, index) => ({ id: index, word }))
const miniSearch = new MiniSearch({
  fields: ['word'],
  storeFields: ['word']
})
miniSearch.addAll(englishWords)

type Props = { searchQuery: string }

const SearchSuggestions = ({ searchQuery }: Props): JSX.Element => {
  const [, setSearchQuery] = useSessionStorage('searchQuery', '')
  const [suggestions, setSuggestions] = useState<string[]>([])
  const router = useRouter()

  useEffect(() => {
    const suggestionProcessed = miniSearch
      .autoSuggest(searchQuery.split(' ').at(-1) as string)
      .slice(2, 8)
      .map(({ suggestion }) => processSuggestion(suggestion, searchQuery))
    setSuggestions(suggestionProcessed)
  }, [searchQuery])

  const handleFocus = (e: React.KeyboardEvent): void => {
    const previousSibling = document.activeElement
      ?.previousSibling as HTMLElement
    const nextSibling = document.activeElement?.nextSibling as HTMLElement
    e.key === 'ArrowUp' && previousSibling?.focus()
    e.key === 'ArrowDown' && nextSibling?.focus()
  }

  const routerPush = (suggestion: string): void => {
    const link = replaceSpecialCharacters(suggestion)
    setSearchQuery(removeHyphens(link))
    void router.push(`/search/${link}`)
  }

  const handleKeyUp =
    (suggestion: string) =>
      (e: React.KeyboardEvent): void => {
        e.key === 'Enter' && routerPush(suggestion)
      }

  const handleClick = (suggestion: string) => (): void => {
    routerPush(suggestion)
  }

  return (
    <ul
      className='bg-white shadow-xl absolute rounded-md top-0 left-1/2 -translate-x-1/2 mt-11 w-64'
      onKeyUp={handleFocus}
    >
      {suggestions.map((suggestion, index) => {
        return (
          <li
            className='px-2 py-0.5 focus:outline-none focus:bg-blue-200'
            tabIndex={0}
            key={index}
            onKeyUp={handleKeyUp(suggestion)}
            onClick={handleClick(suggestion)}
          >
            {suggestion}
          </li>
        )
      })}
    </ul>
  )
}

export default SearchSuggestions
