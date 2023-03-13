import '../../__mocks__/intersectionObserver'
import '../../__mocks__/useRouter'
import { render, screen } from '@testing-library/react'
import Home from '../../pages'
import expectNavbar from '../utils/expectNavbar'
import expectNoGalleryContent from '../utils/expectNoGalleryContent'
import gifProps from '../utils/gifProps'

const fakeProps = { gifsWithProps: [gifProps] }
const emptyProps = { gifsWithProps: [] }

describe('Normal case', () => {
  it('should render content', () => {
    render(<Home {...fakeProps} />)
  })

  it('should have a navbar', expectNavbar(<Home {...fakeProps} />))

  it('should have trends', () => {
    render(<Home {...fakeProps} />)
    screen.getByText('trends...')
  })
})

describe('No props case', () => {
  it('should render content', () => {
    render(<Home {...emptyProps} />)
  })

  it('should have a navbar', expectNavbar(<Home {...emptyProps} />))

  it('should\'t have trends', expectNoGalleryContent(<Home {...emptyProps} />))
})
