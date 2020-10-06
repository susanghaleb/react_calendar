import { createDay } from './createDay'

describe('create weekdays', () => {
  it('should create weekdays of previos month', () => {
    const january = { years: 2020, months: 0 }
    expect(createDay(january, 6, 26, false)).toEqual([
      {
        ...january,
        currentMonth: false,
        number: 26,
        isWeekend: true,
      },
      {
        ...january,
        currentMonth: false,
        number: 27,
        isWeekend: false,
      },
      {
        ...january,
        currentMonth: false,
        number: 28,
        isWeekend: false,
      },
      {
        ...january,
        currentMonth: false,
        number: 29,
        isWeekend: false,
      },
      {
        ...january,
        currentMonth: false,
        number: 30,
        isWeekend: false,
      },
      {
        ...january,
        currentMonth: false,
        number: 31,
        isWeekend: false,
      },
    ])
  })

  it('should create weekdays of current month', () => {
    const february = { years: 2020, months: 1 }
    expect(createDay(february, 29, 1)).toEqual([
      {
        ...february,
        currentMonth: true,
        number: 1,
        isWeekend: true,
      },
      {
        ...february,
        currentMonth: true,
        number: 2,
        isWeekend: true,
      },
      {
        ...february,
        currentMonth: true,
        number: 3,
        isWeekend: false,
      },
      {
        ...february,
        currentMonth: true,
        number: 4,
        isWeekend: false,
      },
      {
        ...february,
        currentMonth: true,
        number: 5,
        isWeekend: false,
      },
      {
        ...february,
        currentMonth: true,
        number: 6,
        isWeekend: false,
      },
      {
        ...february,
        currentMonth: true,
        number: 7,
        isWeekend: false,
      },
      {
        ...february,
        currentMonth: true,
        number: 8,
        isWeekend: true,
      },
      {
        ...february,
        currentMonth: true,
        number: 9,
        isWeekend: true,
      },
      {
        ...february,
        currentMonth: true,
        number: 10,
        isWeekend: false,
      },
      {
        ...february,
        currentMonth: true,
        number: 11,
        isWeekend: false,
      },
      {
        ...february,
        currentMonth: true,
        number: 12,
        isWeekend: false,
      },
      {
        ...february,
        currentMonth: true,
        number: 13,
        isWeekend: false,
      },
      {
        ...february,
        currentMonth: true,
        number: 14,
        isWeekend: false,
      },
      {
        ...february,
        currentMonth: true,
        number: 15,
        isWeekend: true,
      },
      {
        ...february,
        currentMonth: true,
        number: 16,
        isWeekend: true,
      },
      {
        ...february,
        currentMonth: true,
        number: 17,
        isWeekend: false,
      },
      {
        ...february,
        currentMonth: true,
        number: 18,
        isWeekend: false,
      },
      {
        ...february,
        currentMonth: true,
        number: 19,
        isWeekend: false,
      },
      {
        ...february,
        currentMonth: true,
        number: 20,
        isWeekend: false,
      },
      {
        ...february,
        currentMonth: true,
        number: 21,
        isWeekend: false,
      },
      {
        ...february,
        currentMonth: true,
        number: 22,
        isWeekend: true,
      },
      {
        ...february,
        currentMonth: true,
        number: 23,
        isWeekend: true,
      },
      {
        ...february,
        currentMonth: true,
        number: 24,
        isWeekend: false,
      },
      {
        ...february,
        currentMonth: true,
        number: 25,
        isWeekend: false,
      },
      {
        ...february,
        currentMonth: true,
        number: 26,
        isWeekend: false,
      },
      {
        ...february,
        currentMonth: true,
        number: 27,
        isWeekend: false,
      },
      {
        ...february,
        currentMonth: true,
        number: 28,
        isWeekend: false,
      },
      {
        ...february,
        currentMonth: true,
        number: 29,
        isWeekend: true,
      },
    ])
  })
  it('should create weekdays of next month', () => {
    const march = { years: 2020, months: 2 }
    expect(createDay(march, 7, 1, false)).toEqual([
      {
        ...march,
        currentMonth: false,
        number: 1,
        isWeekend: true,
      },
      {
        ...march,
        currentMonth: false,
        number: 2,
        isWeekend: false,
      },
      {
        ...march,
        currentMonth: false,
        number: 3,
        isWeekend: false,
      },
      {
        ...march,
        currentMonth: false,
        number: 4,
        isWeekend: false,
      },
      {
        ...march,
        currentMonth: false,
        number: 5,
        isWeekend: false,
      },
      {
        ...march,
        currentMonth: false,
        number: 6,
        isWeekend: false,
      },
      {
        ...march,
        currentMonth: false,
        number: 7,
        isWeekend: true,
      },
    ])
  })
})
