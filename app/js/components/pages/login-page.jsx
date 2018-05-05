import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import LoginForm from '../auth/login-form';

const LoginPage = function(props) {
  if (props.profile && props.profile.isAuthenticated) {
    return <Redirect to="/" />;
  }
  return <LoginForm />;
};

LoginPage.propTypes = {
  profile: PropTypes.shape({
    isAuthenticated: PropTypes.bool.isRequired,
  }),
};

const mapStateToProps = state => state.user;
export default connect(mapStateToProps)(LoginPage);
