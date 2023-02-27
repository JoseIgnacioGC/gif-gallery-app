import '../../__mocks__/intersectionObserver'
import '../../__mocks__/useRouter'
import { render, screen } from '@testing-library/react'
import Home from '../../pages'
import expectNavbar from '../utils/expectNavbar'

describe('Normal case', () => {
  it('should render content', () => {
    render(<Home gifsWithProps={[]} />)
  })

  it('should have a navbar', expectNavbar(<Home gifsWithProps={[]} />))

  it('should have trends', () => {
    render(<Home gifsWithProps={[]} />)
    screen.getByText('trends...')
  })
})
