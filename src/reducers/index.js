/**
 * Created by trieutran on 7/7/17.
 */
import {ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDER} from '../constants';
import {bake_cookie, read_cookie} from 'sfcookies';

const reminder = (action) => {
  return {
    text: action.text,
    dueDate: action.dueDate,
    id: Math.random()
  }
}

const removeById = (state=[], id) => {
  const reminders = state.filter(reminder => reminder.id !== id);
  console.log('new reminder after removal', reminders);

  return reminders;
}

const removeAll = () => {
  const reminders = [];

  return reminders;
}

const reminders = (state= [], action) => {
  let reminders = null;
  state = read_cookie('my_reminder_pro');

  switch(action.type) {
    case ADD_REMINDER:
      reminders = [...state, reminder(action)];
      bake_cookie('my_reminder_pro', reminders);
      console.log('reminders as state', reminders);
      return reminders;

    case DELETE_REMINDER:
      reminders = removeById(state, action.id);
      bake_cookie('my_reminder_pro', reminders);
      return reminders;

    case CLEAR_REMINDER:
      reminders =  removeAll();
      bake_cookie('my_reminder_pro', reminders);
      return reminders;

    default:
      return state;
  }
};

export default reminders;