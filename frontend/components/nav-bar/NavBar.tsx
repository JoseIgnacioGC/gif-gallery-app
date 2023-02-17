import SearchBar from './SearchBar'
import WebLogo from './WebLogo'

const NavBar = (): JSX.Element => {
  return (
    <nav>
      <WebLogo />
      <span>GifWeb</span>
      <SearchBar placeholder='search...' />
    </nav>
  )
}

export default NavBar
