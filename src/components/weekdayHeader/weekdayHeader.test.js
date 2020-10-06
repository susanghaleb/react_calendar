import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, screen } from '@testing-library/react'
import { WeekdayHeader } from './weekdayHeader.component'

test('load and display weekdayHeader Monday', () => {
  const { container } = render(<WeekdayHeader label="Monday" />)
  expect(screen.getByText('Monday')).toHaveTextContent('Monday')
  expect(container.firstChild).toHaveClass('container')
})
