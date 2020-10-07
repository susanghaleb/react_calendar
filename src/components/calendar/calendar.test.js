import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, screen } from '@testing-library/react'
import { Calendar } from './calendar.component'

test('load and display Calendar and render weekdays label', () => {
  render(<Calendar month="04" year="1982" />)
  expect(screen.getByText('Sunday')).toHaveTextContent('Sunday')
  expect(screen.getByText('Monday')).toHaveTextContent('Monday')
  expect(screen.getByText('Tuesday')).toHaveTextContent('Tuesday')
  expect(screen.getByText('Wednesday')).toHaveTextContent('Wednesday')
  expect(screen.getByText('Thursday')).toHaveTextContent('Thursday')
  expect(screen.getByText('Friday')).toHaveTextContent('Friday')
  expect(screen.getByText('Saturday')).toHaveTextContent('Saturday')
})
