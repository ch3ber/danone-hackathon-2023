import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home', () => {
  it('renders a heading', async () => {
    render(<Home />)

    expect(await screen.findByText('Keep track of your daily calorie limit!')).toBeInTheDocument()
  })
})
