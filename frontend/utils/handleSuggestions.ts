const removeLastWord = (suggestion: string, searchQuery: string): string => {
  const lastIndex = searchQuery.lastIndexOf(' ')
  const queryWithoutLastWord = searchQuery.substring(0, lastIndex)
  return `${queryWithoutLastWord}  ${suggestion}`
}

const toTheMaximumLength = (searchQuery: string): string => {
  const { length } = searchQuery
  const maxLenghtQuery =
    length <= 18 ? searchQuery : `...${searchQuery.slice(length - 18, length)}`
  return maxLenghtQuery
}

export { removeLastWord, toTheMaximumLength }
