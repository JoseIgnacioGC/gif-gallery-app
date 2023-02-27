import '../../__mocks__/intersectionObserver'
import '../../__mocks__/useRouter'
import { render, screen } from '@testing-library/react'
import GifPage from '../../pages/gif/[gifId]'
import expectNavbar from '../utils/expectNavbar'
import gifProps from '../utils/gifProps'

import * as router from 'next/router'
jest.spyOn(router, 'useRouter')

const fakeProps = {
  gifProps,
  gifsWithProps: []
}

const COPY_LINK_BTN_LABEL = /Copy gif link/i
const DOWNLOAD_BTN_LABEL = /Download gif/i

describe('All contender renders correctly', () => {
  it('should render content', () => {
    render(<GifPage {...fakeProps} />)
  })

  it('should have a navbar', expectNavbar(<GifPage {...fakeProps} />))

  it('should have image interaction buttons', () => {
    render(<GifPage {...fakeProps} />)
    screen.getByRole('button', { name: COPY_LINK_BTN_LABEL })
    screen.getByRole('button', { name: DOWNLOAD_BTN_LABEL })
  })

  it('should have similar to this section', () => {
    render(<GifPage {...fakeProps} />)
    screen.getByText('Similar to this...')
  })
})

// describe('The buttons work', () => {
//   it('should copy link and download the gif', async () => {
//     const user = userEvent.setup()
//     render(<GifPage {...fakeProps} />)
//     const copyLinkBtn = screen.getByRole('button', { name: COPY_LINK_BTN_LABEL })
//     await user.click(copyLinkBtn)

//     expect(navigator.clipboard.readText).toHaveTextContent(gifProps.webpUrl)

//     const downloadGifBtn = screen.getByRole('button', { name: DOWNLOAD_BTN_LABEL })
//     await user.click(downloadGifBtn)
//   })
// })
