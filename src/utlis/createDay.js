import moment from 'moment'
export function createDay(month, days, dayInitial, currentMonth = true) {
  const formatWeekday = 'dddd'
  const formatDate = 'D-M-YYY'
  const saturday = 'Saturday'
  const sunday = 'Sunday'
  const incremental = 1
  const { years, months } = month
  const iterations = days + dayInitial
  const wrapper = []
  for (let index = dayInitial; index < iterations; index++) {
    const dates = `${index}-${months + incremental}-${years}`
    const weekday = moment(dates, formatDate).format(formatWeekday)
    const isWeekend = weekday === saturday || weekday === sunday
    wrapper.push({
      isWeekend: isWeekend,
      months,
      number: index,
      years,
      currentMonth,
    })
  }

  return wrapper
}
