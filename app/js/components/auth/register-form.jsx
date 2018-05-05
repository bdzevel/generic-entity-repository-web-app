import React from 'react';

import authenticationService from '../../services/authentication-service';
import notificationService from '../../services/notification-service';

class RegisterForm extends React.Component {
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
    return !!this.state.username && !!this.state.password && !!this.state.confirmPassword
      && !!this.state.firstName && !!this.state.lastName
      && this.state.password === this.state.confirmPassword;
  }

  handleSubmit() {
    if (!this.canSubmit()) {
      notificationService.push('Noap', 'error');
      return;
    }
    authenticationService.register(this.state)
      .catch(() => notificationService.push('Noap', 'error'));
  }

  render() {
    return (
      <div className="register-form">
        <hr />
        <label htmlFor="firstName">First Name </label>
        <input id="firstName" type="text" value={this.state.firstName} onChange={this.handleChange('firstName')} />
        <hr />
        <label htmlFor="lastName">Last Name </label>
        <input id="lastName" type="text" value={this.state.lastName} onChange={this.handleChange('lastName')} />
        <hr />
        <label htmlFor="username">Username </label>
        <input id="username" type="text" value={this.state.username} onChange={this.handleChange('username')} />
        <hr />
        <label htmlFor="password">Password </label>
        <input id="password" type="password" value={this.state.password} onChange={this.handleChange('password')} />
        <br />
        <label htmlFor="confirmPassword">Confirm Password </label>
        <input id="confirmPassword" type="password" value={this.state.confirmPassword} onChange={this.handleChange('confirmPassword')} />
        <hr />
        <button onClick={this.handleSubmit}>Register</button>
      </div>
    );
  }
}

export default RegisterForm;
