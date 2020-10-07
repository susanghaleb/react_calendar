import './selector.styles.css'
import React from 'react'
import PropTypes from 'prop-types'

export function Selector({ date, onDecrement, onIncrement }) {
  return (
    <div className="wrapper__buttons">
      <button className="btn" onClick={onDecrement}>
        -
      </button>
      <span>{date}</span>
      <button className="btn" onClick={onIncrement}>
        +
      </button>
    </div>
  )
}

Selector.propTypes = {
  date: PropTypes.string.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
}
