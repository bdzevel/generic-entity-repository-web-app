import React from 'react';

import authenticationService from '../../services/authentication-service';
import notificationService from '../../services/notification-service';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
    this.initHandlers();
  }

  initHandlers() {
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(fieldName) {
    return function(e) {
      this.setState({ [fieldName]: e.target.value });
    }.bind(this);
  }

  canSubmit() {
    return !!this.state.username && !!this.state.password;
  }

  handleSubmit() {
    if (!this.canSubmit()) {
      notificationService.push('Please enter both a username and password', 'error');
      return;
    }
    authenticationService.login(this.state)
      .catch(() => notificationService.push('Invalid username and password', 'error'));
  }

  render() {
    return (
      <div className="login-form">
        <hr />
        <label htmlFor="username">Username </label>
        <input id="username" type="text" value={this.state.username} onChange={this.handleChange('username')} />
        <hr />
        <label htmlFor="password">Password </label>
        <input id="password" type="password" value={this.state.password} onChange={this.handleChange('password')} />
        <hr />
        <button onClick={this.handleSubmit}>Sign In</button>
      </div>
    );
  }
}

export default LoginForm;
