import React from 'react'

import { Reminder } from './reminder.component'

export default {
  title: 'Components/Reminder',
  component: Reminder,
  argTypes: { onClick: { action: 'reminder click' } },
}

const Template = (args) => <Reminder {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Buy groseries',
}
