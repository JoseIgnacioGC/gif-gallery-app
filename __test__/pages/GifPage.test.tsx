import '../../__mocks__/intersectionObserver'
import '../../__mocks__/useRouter'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import GifPage from '../../pages/gif/[gifId]'
import expectNavbar from '../utils/expectNavbar'
import gifProps from '../utils/gifProps'

const fakeProps = {
  gifProps,
  gifsWithProps: [gifProps]
}

const emptyProps = {
  gifProps: null,
  gifsWithProps: []
}

const COPY_LINK_BTN_LABEL = /Copy gif link/i
const DOWNLOAD_BTN_LABEL = /Download gif/i

describe('Normal case', () => {
  it('should render content', () => {
    render(<GifPage {...fakeProps} />)
  })

  it('should have a navbar', expectNavbar(<GifPage {...fakeProps} />))

  it('should have image interaction buttons', () => {
    render(<GifPage {...fakeProps} />)
    screen.getByRole('button', { name: COPY_LINK_BTN_LABEL })
    screen.getByRole('button', { name: DOWNLOAD_BTN_LABEL })
  })

  it('should have gif gallery', () => {
    render(<GifPage {...fakeProps} />)
    screen.getByText('Similar to this...')
    screen.getAllByAltText(gifProps.title)
  })
})

describe('No props cases', () => {
  it('should render', () => {
    render(<GifPage {...emptyProps} />)
  })

  it('should render nothing', async () => {
    render(<GifPage {...emptyProps} />)
    const galleryText = screen.queryByText('Similar to this...')
    expect(galleryText).not.toBeInTheDocument()
    const placeholderText = screen.queryByPlaceholderText('search...')
    expect(placeholderText).not.toBeInTheDocument()
  })
})
