import React from 'react'

import { Selector } from './selector.component'

export default {
  title: 'Components/Selector',
  component: Selector,
}

const Template = (args) => <Selector {...args} />

export const WeekdayComponent = Template.bind({})
WeekdayComponent.args = {
  date: '10-2010',
  onDecrement: () => {},
  onIncrement: () => {},
}
