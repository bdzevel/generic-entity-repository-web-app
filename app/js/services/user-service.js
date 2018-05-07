import webService from './web-service';

import store from '../store/app-store';
import { updateUserContext } from '../actions/user-actions';

class UserService {
  retrieveUserProfile() {
    return webService.sendRequest('/api/user', { method: 'GET' }, { parse: false })
      .then(function(response) {
        if (response.status === 403) {
          return null;
        }
        return response.json();
      })
      .then(function(profile) {
        if (!profile || !profile.isAuthenticated) {
          return;
        }
        store.dispatch(updateUserContext(profile));
      });
  }

  createUser(username, firstName = null, lastName = null, emailAddress = null) {
    const body = { username: username.toLowerCase(), firstName, lastName, emailAddress };
    return webService.sendRequest('/api/user', { method: 'POST', body }, { parse: false })
      .then(function(response) {
        if (response.status === 403) {
          return null;
        }
        return response.json();
      });
  }

  createAdminUser(username, clientName, firstName = null, lastName = null, emailAddress = null) {
    const body = { username: username.toLowerCase(), clientName, firstName, lastName, emailAddress };
    return webService.sendRequest('/api/adminUser', { method: 'POST', body }, { parse: false })
      .then(function(response) {
        if (response.status === 403) {
          return null;
        }
        return response.json();
      });
  }
}

export default new UserService();
