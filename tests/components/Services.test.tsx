import { render, screen } from '@testing-library/react'
import Services from '@/components/Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByText('A Full Tech Ecosystem')).toBeInTheDocument()
  })

  it('renders all 9 service cards', () => {
    render(<Services />)
    expect(screen.getByText('Software & Digital Solutions')).toBeInTheDocument()
    expect(screen.getByText('ICT Infrastructure Services')).toBeInTheDocument()
    expect(screen.getByText('Cybersecurity')).toBeInTheDocument()
    expect(screen.getByText('Network & Connectivity')).toBeInTheDocument()
    expect(screen.getByText('Data Services')).toBeInTheDocument()
    expect(screen.getByText('Tech Sales & Distribution')).toBeInTheDocument()
    expect(screen.getByText('Consulting & Contracts')).toBeInTheDocument()
    expect(screen.getByText('ICT Training')).toBeInTheDocument()
    expect(screen.getByText('IT Asset Lifecycle')).toBeInTheDocument()
  })
})
