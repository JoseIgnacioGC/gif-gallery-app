import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { replaceSpecialCharacters, urlHaveSpecialCharacters } from '../utils/searchQueryUtils'

const useRedirectToCorrectUrl = (searchQuery: string): void => {
  const router = useRouter()
  useEffect(() => {
    if (!urlHaveSpecialCharacters(searchQuery)) return undefined
    const formattedSearchQuery = replaceSpecialCharacters(searchQuery)
    void router.push(`/search/${formattedSearchQuery}`)
  }, [router, searchQuery])
}

export default useRedirectToCorrectUrl
