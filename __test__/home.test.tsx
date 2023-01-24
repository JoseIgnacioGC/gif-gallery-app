import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Home from '../pages'

it('renders content', () => {
  render(<Home />)
})

it('should have a title', () => {
  render(<Home />)
  screen.getByText('GifWeb')
})

it('should have a search bar', () => {
  render(<Home />)
  screen.getByPlaceholderText('search...')
})
