import React from 'react'
import { render, screen } from '@testing-library/react'
import fetchMock from 'jest-fetch-mock'
import Home from '@/app/page'

fetchMock.enableMocks()

describe('Home', () => {
  it('renders a heading', async () => {
    const mockData = [{ id: 1, name: 'Mock Data 1' }, { id: 2, name: 'Mock Data 2' }]
    fetchMock.mockResponse(JSON.stringify(mockData))

    render(<Home />)

    expect(await screen.findByText('Danone hackathon')).toBeInTheDocument()
  })
})
