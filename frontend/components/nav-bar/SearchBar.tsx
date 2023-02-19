import useField from '../../hooks/useField'

type Props = { placeholder?: string }

const SearchBar = ({ placeholder }: Props): JSX.Element => {
  const searchBar = useField({ type: 'text' })
  return (
    <>
      <input placeholder={placeholder} {...searchBar} />
      <button aria-label='Search gifs' >*lupa*</button>
    </>
  )
}

export default SearchBar
