import '../../__mocks__/intersectionObserver'
import '../../__mocks__/useRouter'
import { render, screen } from '@testing-library/react'
import SearchPage from '../../pages/search/[searchQuery]'
import expectNavbar from '../utils/expectNavbar'
import gifProps from '../utils/gifProps'
import expectNoGalleryContent from '../utils/expectNoGalleryContent'

const fakeProps = {
  gifsWithProps: [gifProps]
}

const emptyProps = {
  gifsWithProps: []
}

describe('Normal case', () => {
  it('should render content', () => {
    render(<SearchPage {...fakeProps} />)
  })

  it('should have a navbar', expectNavbar(<SearchPage {...fakeProps} />))

  it('should have similar to this section', () => {
    render(<SearchPage {...fakeProps} />)
    screen.getByText('gifs related to ""')
  })
})

describe('No Props case', () => {
  it('should render content', () => {
    render(<SearchPage {...emptyProps} />)
  })

  it('should have a navbar', expectNavbar(<SearchPage {...emptyProps} />))

  it(
    "should't have trends",
    expectNoGalleryContent(<SearchPage {...emptyProps} />)
  )
})
