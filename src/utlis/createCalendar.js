import moment from 'moment'
import { createDay } from './createDay'

const format = 'M-YYYY'
const shortDay = 'D'
const longDay = 'dddd'
const initialDay = 1
const fullMonthCalendar = 42

function rewindDays(day, date) {
  const weekdays = [
    { weekday: 'Sunday', days: 0, date },
    { weekday: 'Monday', days: 2, date },
    { weekday: 'Tuesday', days: 3, date },
    { weekday: 'Wednesday', days: 4, date },
    { weekday: 'Thursday', days: 5, date },
    { weekday: 'Friday', days: 6, date },
    { weekday: 'Saturday', days: 0, date },
  ]
  return weekdays.find(
    ({ weekday }) => weekday.toUpperCase() === day.toUpperCase()
  )
}

export function createCalendar(date) {
  const dateCloned = moment(date, format).clone()
  const previousMonth = moment(dateCloned).subtract(1, 'months').toObject()
  const monthSelected = moment(dateCloned, format).toObject()
  const nextMonth = moment(dateCloned).add(1, 'months').toObject()
  const daysOfMonth = moment(dateCloned).daysInMonth()
  const lastDayPreveiousMonth = moment(previousMonth).endOf('month')
  const weekdayLastMonth = lastDayPreveiousMonth.format(longDay)
  const weekdayNumberLastMonth = lastDayPreveiousMonth.format(shortDay)

  const daysPreviousMonthToAdd = rewindDays(
    weekdayLastMonth,
    weekdayNumberLastMonth
  )

  const previousDaysPlusDaysMonthSelected =
    daysPreviousMonthToAdd.days + daysOfMonth

  const daysNextMonth = fullMonthCalendar - previousDaysPlusDaysMonthSelected

  const previousDates = createDay(
    previousMonth,
    daysPreviousMonthToAdd.days,
    daysPreviousMonthToAdd.date - daysPreviousMonthToAdd.days + 1,
    false
  )

  const currentDates = createDay(monthSelected, daysOfMonth, initialDay)

  const nextDates = createDay(nextMonth, daysNextMonth, initialDay, false)

  return [...previousDates, ...currentDates, ...nextDates]
}
