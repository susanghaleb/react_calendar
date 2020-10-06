import React from 'react'

import { WeekdayHeader } from './weekdayHeader.component'

export default {
  title: 'Components/WeekdayHeader',
  component: WeekdayHeader,
}

const Template = (args) => <WeekdayHeader {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Monday',
}
