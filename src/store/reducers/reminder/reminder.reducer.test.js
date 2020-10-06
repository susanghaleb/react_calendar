import {
  CREATE_REMINDER,
  DELETE_REMINDER,
  UPDATE_REMINDER,
} from '../../types/reminder/reminder.types'
import { remindersReducer } from './reminder.reducer'

describe('reminder reducer', () => {
  it('should return the initial state', () => {
    expect(remindersReducer(undefined, {})).toEqual({
      reminders: [],
    })
  })

  it('should add a reminder', () => {
    const action = {
      type: CREATE_REMINDER,
      reminder: {
        label: 'Go to run',
        id: '123456',
      },
    }

    expect(remindersReducer({ reminders: [] }, action)).toEqual({
      reminders: [{ id: '123456', label: 'Go to run' }],
    })
  })

  it('should update a reminder', () => {
    const reminders = [
      {
        label: 'Go to run',
        id: '123456',
      },
    ]

    const action = {
      type: UPDATE_REMINDER,
      newReminder: {
        label: 'Go to run tomorrow',
        id: '123456',
      },
    }

    expect(remindersReducer({ reminders }, action)).toEqual({
      reminders: [{ id: '123456', label: 'Go to run tomorrow' }],
    })
  })

  it('should delete a reminder', () => {
    const reminders = [
      {
        label: 'Go to run',
        id: '123456',
      },
    ]

    const action = {
      type: DELETE_REMINDER,
      id: '123456',
    }

    expect(remindersReducer({ reminders }, action)).toEqual({
      reminders: [],
    })
  })
})
