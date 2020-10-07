import {
  CREATE_REMINDER,
  DELETE_REMINDER,
  UPDATE_REMINDER,
} from '../../types/reminder/reminder.types'

const initialState = {
  reminders: [],
}

export function remindersReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_REMINDER:
      return {
        ...state,
        reminders: [action.reminder, ...state.reminders],
      }

    case UPDATE_REMINDER:
      return {
        ...state,
        reminders: handleUpdateReminder(state.reminders, action.newReminder),
      }

    case DELETE_REMINDER:
      return {
        ...state,
        reminders: handleDeleteReminder(state.reminders, action.id),
      }

    default:
      return state
  }
}

function handleUpdateReminder(prevState, newReminder) {
  return prevState.map((reminder) =>
    reminder.id === newReminder.id ? newReminder : reminder
  )
}

function handleDeleteReminder(prevState, id) {
  return prevState.filter((reminder) => reminder.id !== id)
}
