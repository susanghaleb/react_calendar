import React from 'react'

import { Weekday } from './weekday.component'

export default {
  title: 'Components/Weekday',
  component: Weekday,
}

const Template = (args) => <Weekday {...args} />

export const WeekdayComponent = Template.bind({})
WeekdayComponent.args = {
  label: 1,
}
