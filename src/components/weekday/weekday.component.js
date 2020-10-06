import './weekday.styles.css'
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export function Weekday({ label, isWeekend, disabled }) {
  return (
    <div
      className={classNames('square', {
        'square--weekend': isWeekend,
        'square--disabled': disabled,
      })}
    >
      <span>{label}</span>
    </div>
  )
}

Weekday.propTypes = {
  label: PropTypes.number.isRequired,
  isWeekend: PropTypes.bool,
  disabled: PropTypes.bool,
}

Weekday.defaultProps = {
  isWeekend: false,
  disabled: false,
}
