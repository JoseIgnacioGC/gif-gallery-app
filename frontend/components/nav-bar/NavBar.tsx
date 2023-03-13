import SearchBar from './SearchBar'
import WebLogo from './WebLogo'
import { useState, useEffect } from 'react'

type Props = { isSmall?: boolean }

const NavBar = ({
  isSmall = false
}: Props): JSX.Element => {
  const [scrollInTop, setScrollInTop] = useState(!isSmall)

  useEffect(() => {
    const handleScroll = (): void => {
      isSmall ? setScrollInTop(false) : setScrollInTop(window.scrollY < 5)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isSmall])

  return (
    <nav
      className={
        'transition-all duration-300 bg-eggshell dark:bg-slate-600 sticky top-0 w-full ' +
        (scrollInTop
          ? 'flex pb-20 flex-col items-center'
          : 'inline-flex flex-row w-full justify-center items-center py-3')
      }
    >

      <WebLogo scrollInTop={scrollInTop} />
      <h1
        className={
          scrollInTop
          ? 'text-dark-gunmetal dark:text-slate-200 text-center -translate-y-3 font-semibold text-xl mt-12 mb-1'
          : 'hidden'
        }
      >
        GifWeb
      </h1>
      <SearchBar placeholder='search...' />
    </nav>
  )
}

export default NavBar
