import words from 'an-array-of-english-words'
import MiniSearch from 'minisearch'

const englishWords = words.map((word, index) => ({ id: index, word }))
const miniSearch = new MiniSearch({
  fields: ['word'],
  storeFields: ['word']
})
miniSearch.addAll(englishWords)

export { miniSearch }
