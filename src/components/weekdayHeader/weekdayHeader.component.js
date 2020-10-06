import './weekdayHeader.styles.css'
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export function WeekdayHeader({ label }) {
  return (
    <div className={classNames('container')}>
      <span>{label}</span>
    </div>
  )
}

WeekdayHeader.propTypes = {
  label: PropTypes.oneOf([
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ]),
}
