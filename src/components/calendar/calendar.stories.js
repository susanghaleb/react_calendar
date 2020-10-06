import React from 'react'

import { Calendar } from './calendar.component'

export default {
  title: 'Components/Calendar',
  component: Calendar,
}

const Template = (args) => <Calendar {...args} />

export const Default = Template.bind({})
Default.args = {
  month: '01',
  year: '2020',
}
