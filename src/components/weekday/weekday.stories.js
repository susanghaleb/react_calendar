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
  reminders: [],
}

export const WeekdayWithReminders = Template.bind({})
WeekdayWithReminders.args = {
  label: 1,
  reminders: [
    { label: 'Buy pet food', color: 'red', id: 'kjnsdv' },
    { label: 'Go to the mechanic', id: 'kjnsdvcwcew' },
    { label: 'Do exercises!!', id: 'wefewgfeawg' },
    { label: 'Pay services', color: 'pink', id: 'ewfgewageagaer' },
  ],
}
