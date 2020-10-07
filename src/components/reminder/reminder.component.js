import './reminder.styles.css'
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export function Reminder({ label, color, onClick }) {
  const handleClick = () => {
    onClick()
  }

  return (
    <button
      className={classNames('reminder', `reminder--color--${color}`)}
      onClick={handleClick}
    >
      <span className="label">{label}</span>
    </button>
  )
}

Reminder.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['blue', 'red', 'pink', 'green']),
  onClick: PropTypes.func.isRequired,
}

Reminder.defaultProps = {
  color: 'blue',
}
