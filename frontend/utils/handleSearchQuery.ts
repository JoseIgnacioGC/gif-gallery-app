const urlHaveSpecialCharacters = (searchQuery: string): boolean =>
  /[ $%&=]/g.test(searchQuery)

const replaceSpecialCharacters = (searchQuery: string): string =>
  searchQuery.replace(/([$%&=]| +$|^ +)/g, '').replace(/(  +| )/g, '-')

const removeHyphens = (searchQuery: string): string =>
  searchQuery.replace(/-/g, ' ')

const toMaximumQueryLength = (searchQuery: string): string =>
  searchQuery.slice(0, 50)

const validateSearchQuery = (searchQuery: string): string =>
  toMaximumQueryLength(removeHyphens(searchQuery))

export {
  urlHaveSpecialCharacters,
  replaceSpecialCharacters,
  removeHyphens,
  validateSearchQuery
}
