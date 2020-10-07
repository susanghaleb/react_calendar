import './calendar.styles.css'
import React from 'react'
import PropTypes from 'prop-types'

import { Weekday } from '../weekday/weekday.component'
import { WeekdayHeader } from '../weekdayHeader/weekdayHeader.component'

import { createCalendar } from '../../utlis/createCalendar'

export function Calendar({ month, year }) {
  const calendar = createCalendar(`${month}-${year}`)
  const weekdaysLabel = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  return (
    <div className="calendar">
      <div className="wrapper__weekdays__headers">
        {weekdaysLabel.map((weekday) => (
          <WeekdayHeader label={weekday} key={weekday} />
        ))}
      </div>
      <div className="wrapper__calendar">
        {calendar.map((data) => (
          <Weekday
            key={`${JSON.stringify(data)}`}
            label={Number(data.number)}
            isWeekend={data.isWeekend}
            disabled={!data.currentMonth}
          />
        ))}
      </div>
    </div>
  )
}

Calendar.propTypes = {
  month: PropTypes.oneOf([
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ]).isRequired,
  year: PropTypes.string.isRequired,
}
