import { render, screen } from '@testing-library/react'
import Hero from '@/components/Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('renders the CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByText('Explore Services')).toBeInTheDocument()
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
  })

  it('has correct href on CTA buttons', () => {
    render(<Hero />)
    const servicesBtn = screen.getByText('Explore Services').closest('a')
    const contactBtn = screen.getByText('Contact Us').closest('a')
    expect(servicesBtn).toHaveAttribute('href', '#services')
    expect(contactBtn).toHaveAttribute('href', '#contact')
  })
})
