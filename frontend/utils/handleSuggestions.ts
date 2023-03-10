const processSuggestion = (suggestion: string, searchQuery: string): string => {
  const lastIndex = searchQuery.lastIndexOf(' ')
  const queryWithoutLastWord = searchQuery.substring(0, lastIndex)
  const length = queryWithoutLastWord.length
  const maxLenghtQuery =
    queryWithoutLastWord.length <= 18
      ? queryWithoutLastWord
      : `...${queryWithoutLastWord.slice(length - 18, length)}`
  return `${maxLenghtQuery}  ${suggestion}`
}

export { processSuggestion }
