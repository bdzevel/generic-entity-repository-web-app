import { combineReducers } from 'redux';

import userReducer from './user-reducer';
import notificationReducer from './notification-reducer';

export default combineReducers({
  user: userReducer,
  notification: notificationReducer,
});
