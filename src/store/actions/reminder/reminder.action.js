import {
  CREATE_REMINDER,
  UPDATE_REMINDER,
  DELETE_REMINDER,
} from '../../types/reminder/reminder.types'

export const createReminder = (reminder) => ({
  type: CREATE_REMINDER,
  reminder,
})

export const updateReminder = (newReminder) => ({
  type: UPDATE_REMINDER,
  newReminder,
})
export const deleteReminder = (id) => ({
  type: DELETE_REMINDER,
  id,
})
