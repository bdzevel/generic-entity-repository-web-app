import webService from './web-service';

import store from '../store/app-store';
import { updateUserContext } from '../actions/user-actions';

class AuthenticationService {
  login(options) {
    return webService.sendRequest('/auth/login', { body: JSON.stringify(options) })
      .then(profile => store.dispatch(updateUserContext(profile)));
  }

  logout() {
    return webService.sendRequest('/auth/logout', { }, { parse: false })
      .then(() => store.dispatch(updateUserContext({ isAuthenticated: false })));
  }

  register(options) {
    return webService.sendRequest('/auth/register', { body: JSON.stringify(options) })
      .then(profile => store.dispatch(updateUserContext(profile)));
  }
}

export default new AuthenticationService();
