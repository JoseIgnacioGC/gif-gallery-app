import { render, screen } from '@testing-library/react'

const expectNavbar = (component: JSX.Element) => (): void => {
  render(component)
  screen.getByText('G')
  screen.getByLabelText('Go to home page')
  screen.getByText('GifWeb')
  screen.getByPlaceholderText('search...')
  screen.getByRole('button', { name: /Search gifs/i })
}

export default expectNavbar
