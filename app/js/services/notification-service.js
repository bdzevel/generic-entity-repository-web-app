import store from '../store/app-store';
import { pushNotification, dismissNotification } from '../actions/notification-actions';

class NotificationService {
  push(message, type) {
    store.dispatch(pushNotification(message, type));
  }

  dismiss() {
    store.dispatch(dismissNotification());
  }
}

export default new NotificationService();
