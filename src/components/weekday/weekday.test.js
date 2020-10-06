import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, screen } from '@testing-library/react'
import { Weekday } from './weekday.component'

test('load and display day one', () => {
  const { container } = render(<Weekday label={1} />)
  expect(screen.getByText('1')).toHaveTextContent(1)
  expect(container.firstChild).toHaveClass('square')
})

test('load and display day one disabled', () => {
  const { container } = render(<Weekday label={1} disabled />)
  expect(screen.getByText('1')).toHaveTextContent(1)
  expect(container.firstChild).toHaveClass('square square--disabled')
})

test('load and display day one weekend', () => {
  const { container } = render(<Weekday label={1} isWeekend />)
  expect(screen.getByText('1')).toHaveTextContent(1)
  expect(container.firstChild).toHaveClass('square square--weekend')
})

test('load and display day one weekend and disabled', () => {
  const { container } = render(<Weekday label={1} isWeekend disabled />)
  expect(screen.getByText('1')).toHaveTextContent(1)
  expect(container.firstChild).toHaveClass(
    'square square--weekend square--disabled'
  )
})
