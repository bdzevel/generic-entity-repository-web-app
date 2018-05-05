import { actions } from '../resources/constants';

const initialState = {
  latest: undefined,
  notifications: [ ],
};

function reduce(state = initialState, action) {
  switch (action.type) {
    case (actions.NOTIFICATION_PUSH): {
      const notifications = state.notifications;
      notifications.push(action.payload);
      return Object.assign({ }, state, { latest: action.payload, notifications });
    }
    case (actions.NOTIFICATION_DISMISS): {
      const notifications = state.notifications;
      if (notifications.length) {
        notifications.pop();
      }
      const next = notifications[notifications.length - 1];
      return Object.assign({ }, state, { latest: next, notifications });
    }
    default:
      break;
  }
  return state;
}

export default reduce;
