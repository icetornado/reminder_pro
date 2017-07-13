/**
 * Created by trieutran on 7/7/17.
 */
import {ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDER} from '../constants';

export const addReminder = (text, dueDate) => {
  const action = {
    type: ADD_REMINDER,
    text: text,
    dueDate: dueDate
  }

  console.log('action from actionjs', action);

  return action;
}

export const deleteReminder = (id) => {
  const action = {
    type: DELETE_REMINDER,
    id
  };

  console.log('deleting in action', action);

  return action;
}

export const clearReminders = () => {
  const action = {
    type: CLEAR_REMINDER
  };

  return action;
}