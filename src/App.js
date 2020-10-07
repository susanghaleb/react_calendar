import moment from 'moment'

import React from 'react'
import './App.css'
import { Calendar } from './components/calendar/calendar.component'
import { Selector } from './components/selector/selector.component'
import { ErrorBoundary } from './components/errorBoundary/errorBoundary.component'

import { useWeather } from './hook/useWeather'

function App() {
  const [month, setMonth] = React.useState(0)
  const [year, setYear] = React.useState(2020)

  const { weather, getWeather } = useWeather()

  React.useEffect(() => {
    getWeather('London')
  }, [getWeather])

  const handleDecrement = React.useCallback(() => {
    if (month === 0) {
      setMonth(11)
      setYear((prev) => prev - 1)
      return
    }
    setMonth((prev) => prev - 1)
  }, [month])

  const handleIncrement = React.useCallback(() => {
    if (month === 11) {
      setMonth(0)
      setYear((prev) => prev + 1)
      return
    }
    setMonth((prev) => prev + 1)
  }, [month])

  const monthCalendar = moment([year, month]).format('MM')
  const yaarCalendar = moment([year, month]).format('YYYY')
  const monthDate = moment([year, month]).format('MMMM')

  return (
    <ErrorBoundary>
      <div className="main">
        <h1>Calendar</h1>
        <h3>{monthDate.toUpperCase()}</h3>
        {weather && <h3>{weather}</h3>}
        <Calendar
          month={monthCalendar.toString()}
          year={yaarCalendar.toString()}
        />
        <hr />
        <Selector
          date={`${monthCalendar}-${yaarCalendar}`}
          onDecrement={handleDecrement}
          onIncrement={handleIncrement}
        />
      </div>
    </ErrorBoundary>
  )
}

export default App
