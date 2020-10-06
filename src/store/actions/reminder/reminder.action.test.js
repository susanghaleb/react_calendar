import {
  CREATE_REMINDER,
  UPDATE_REMINDER,
  DELETE_REMINDER,
} from '../../types/reminder/reminder.types'
import {
  createReminder,
  deleteReminder,
  updateReminder,
} from './reminder.action'

describe('actions reminders', () => {
  it('should create an reminder by action', () => {
    const reminder = {
      label: 'Go to run',
      id: '123456',
    }
    const expectedAction = {
      type: CREATE_REMINDER,
      reminder,
    }
    expect(createReminder(reminder)).toEqual(expectedAction)
  })

  it('should update an reminder by action', () => {
    const newReminder = {
      label: 'Go to run',
      id: '123456',
    }
    const expectedAction = {
      type: UPDATE_REMINDER,
      newReminder,
    }
    expect(updateReminder(newReminder)).toEqual(expectedAction)
  })

  it('should delete an reminder by action', () => {
    const id = '123456'
    const expectedAction = {
      type: DELETE_REMINDER,
      id,
    }
    expect(deleteReminder(id)).toEqual(expectedAction)
  })
})
