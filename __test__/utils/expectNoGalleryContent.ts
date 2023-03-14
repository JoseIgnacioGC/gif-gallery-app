import { render, screen } from '@testing-library/react'

const expectNoGalleryContent = (component: JSX.Element) => (): void => {
  render(component)
  screen.getByText('no gifs available')
}

export default expectNoGalleryContent
