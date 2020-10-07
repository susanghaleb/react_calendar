import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, screen } from '@testing-library/react'
import { Selector } from './selector.component'

test('load and display Selector', () => {
  const callback = jest.fn()
  const { container } = render(
    <Selector date="10-2020" onIncrement={callback} onDecrement={callback} />
  )
  expect(screen.getByText('10-2020')).toHaveTextContent('10-2020')
  expect(container.firstChild).toHaveClass('wrapper__buttons')
})
