const urlHaveEscapedCharacters = (searchQuery: string): boolean =>
  /[ $%&=]/g.test(searchQuery)

const replaceEscapedCharacters = (searchQuery: string): string =>
  searchQuery.replace(/[$%&=]/g, '').replace(/ /g, '-')

const replaceSpecialCharacters = (searchQuery: string): string =>
  searchQuery === ''
    ? ''
    : searchQuery.replace(/[/$%&=]/g, '').replace(/ /g, '-')

export {
  replaceSpecialCharacters,
  urlHaveEscapedCharacters,
  replaceEscapedCharacters
}
