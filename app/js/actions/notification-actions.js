import { actions } from '../resources/constants';

const pushNotification = function(message, type) {
  return {
    type: actions.NOTIFICATION_PUSH,
    payload: { message, type },
  };
};

const dismissNotification = function() {
  return {
    type: actions.NOTIFICATION_DISMISS,
  };
};

export {
  pushNotification,
  dismissNotification,
};

export default {
  pushNotification,
  dismissNotification,
};
