import { render, screen } from '@testing-library/react'
import About from '@/components/About'

describe('About', () => {
  it("renders the section heading", () => {
    render(<About />)
    expect(screen.getByText("Nigeria's Tech Ecosystem Company")).toBeInTheDocument()
  })

  it('renders the four company pillars', () => {
    render(<About />)
    expect(screen.getByText('Build')).toBeInTheDocument()
    expect(screen.getByText('Support')).toBeInTheDocument()
    expect(screen.getByText('Secure')).toBeInTheDocument()
    expect(screen.getByText('Enable')).toBeInTheDocument()
  })
})
