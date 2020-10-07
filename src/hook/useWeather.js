import axios from 'axios'

import React from 'react'

const key = 'e69e1decc3b148733ee5972949f6fc7e'

export function useWeather() {
  const [weather, setWeather] = React.useState('')
  const [error, setError] = React.useState('')

  // eslint-disable-next-line space-before-function-paren
  const getWeather = React.useCallback(async (city) => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
      )
      setWeather(data.weather[0].description)
    } catch (error) {
      setError(error)
    }
  }, [])

  return { weather, error, getWeather }
}
