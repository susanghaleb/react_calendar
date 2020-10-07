import moment from 'moment'
import { createCalendar } from './createCalendar'
const format = 'M-YYYY'
const fullMonthCalendar = 42

const currentYear = moment().year()

describe('Create calendar', () => {
  it('January', () => {
    expect(
      createCalendar(moment(`01-${currentYear}`, format).format(format))
    ).toHaveLength(fullMonthCalendar)
  })
  it('February', () => {
    expect(
      createCalendar(moment(`02-${currentYear}`, format).format(format))
    ).toHaveLength(fullMonthCalendar)
  })
  it('March', () => {
    expect(
      createCalendar(moment(`03-${currentYear}`, format).format(format))
    ).toHaveLength(fullMonthCalendar)
  })
  it('April', () => {
    expect(
      createCalendar(moment(`04-${currentYear}`, format).format(format))
    ).toHaveLength(fullMonthCalendar)
  })
  it('May', () => {
    expect(
      createCalendar(moment(`05-${currentYear}`, format).format(format))
    ).toHaveLength(fullMonthCalendar)
  })
  it('Jun', () => {
    expect(
      createCalendar(moment(`06-${currentYear}`, format).format(format))
    ).toHaveLength(fullMonthCalendar)
  })
  it('july', () => {
    expect(
      createCalendar(moment(`07-${currentYear}`, format).format(format))
    ).toHaveLength(fullMonthCalendar)
  })
  it('Aug', () => {
    expect(
      createCalendar(moment(`08-${currentYear}`, format).format(format))
    ).toHaveLength(fullMonthCalendar)
  })
  it('Sep', () => {
    expect(
      createCalendar(moment(`09-${currentYear}`, format).format(format))
    ).toHaveLength(fullMonthCalendar)
  })
  it('Oct', () => {
    expect(
      createCalendar(moment(`10-${currentYear}`, format).format(format))
    ).toHaveLength(fullMonthCalendar)
  })
  it('Nov', () => {
    expect(
      createCalendar(moment(`11-${currentYear}`, format).format(format))
    ).toHaveLength(fullMonthCalendar)
  })
  it('Dec', () => {
    expect(
      createCalendar(moment(`12-${currentYear}`, format).format(format))
    ).toHaveLength(fullMonthCalendar)
  })

  it('should always create a calendar of fullMonthCalendar lenght yearly', () => {
    describe.each([
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
    ])('year 1982', (moth) => {
      expect(
        createCalendar(moment(`${moth}-1982`, format).format(format))
      ).toHaveLength(fullMonthCalendar)
    })
  })
})
