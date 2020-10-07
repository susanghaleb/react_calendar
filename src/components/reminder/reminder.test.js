import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, screen } from '@testing-library/react'
import { Reminder } from './reminder.component'

const label = 'Buy groseries'
const clickEvent = jest.fn()

test('load and display reminder default', () => {
  const { container } = render(<Reminder label={label} onClick={clickEvent} />)
  expect(screen.getByText(label)).toHaveTextContent('Buy groseries')
  expect(container.firstChild).toHaveClass('reminder reminder--color--blue')
})
test('load and display reminder red', () => {
  const { container } = render(
    <Reminder label={label} color="red" onClick={clickEvent} />
  )
  expect(screen.getByText(label)).toHaveTextContent('Buy groseries')
  expect(container.firstChild).toHaveClass('reminder reminder--color--red')
})
test('load and display reminder pink', () => {
  const { container } = render(
    <Reminder label={label} color="pink" onClick={clickEvent} />
  )
  expect(screen.getByText(label)).toHaveTextContent('Buy groseries')
  expect(container.firstChild).toHaveClass('reminder reminder--color--pink')
})
test('load and display reminder green', () => {
  const { container } = render(
    <Reminder label={label} color="green" onClick={clickEvent} />
  )
  expect(screen.getByText(label)).toHaveTextContent('Buy groseries')
  expect(container.firstChild).toHaveClass('reminder reminder--color--green')
})
