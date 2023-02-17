import useField from '../../hooks/useField'

type Props = { placeholder?: string }

const SearchBar = ({ placeholder }: Props): JSX.Element => {
  const searchBar = useField({ type: 'text' })
  return (
    <>
      <input {...searchBar} placeholder={placeholder} />
      <button>*lupa*</button>
    </>
  )
}

export default SearchBar
