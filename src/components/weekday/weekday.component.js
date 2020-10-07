import './weekday.styles.css'
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Reminder } from '../reminder/reminder.component'

export function Weekday({ label, isWeekend, disabled, onReminder, reminders }) {
  return (
    <div
      className={classNames('square', {
        'square--weekend': isWeekend,
        'square--disabled': disabled,
      })}
    >
      <span>{label}</span>

      {reminders.map(({ label, id, color }) => {
        return (
          <Reminder
            label={label}
            color={color}
            onClick={() => onReminder(label, id)} // TODO: optimize with hook React.useCallback
            id={id}
            key={id}
          />
        )
      })}
    </div>
  )
}

Weekday.propTypes = {
  label: PropTypes.number.isRequired,
  isWeekend: PropTypes.bool,
  disabled: PropTypes.bool,
  onReminder: PropTypes.func.isRequired,
  reminders: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      color: PropTypes.oneOf(['blue', 'red', 'pink', 'green']),
    })
  ),
}

Weekday.defaultProps = {
  isWeekend: false,
  disabled: false,
  reminders: [],
  onReminder: () => {},
}
