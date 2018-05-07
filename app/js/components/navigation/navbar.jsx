import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import authService from '../../services/authentication-service';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.initHandlers();
  }

  initHandlers() {
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    authService.logout();
  }

  render() {
    const { isAdmin, isAuthenticated } = this.props.profile;
    return (
      <div className="navbar">
        <NavLink exact to="/"> Home </NavLink>
        { !isAuthenticated ? <NavLink exact to="/login"> Login </NavLink> : null }
        { isAdmin ? <NavLink exact to="/client-management"> Client Management </NavLink> : null }
        { isAuthenticated ? <a href="#" onClick={this.handleLogout}> Logout </a> : null }
      </div>
    );
  }
}

NavBar.propTypes = {
  profile: PropTypes.shape({
    isAdmin: PropTypes.bool.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
  }),
};

const mapStateToProps = state => state.user;
export default connect(mapStateToProps)(NavBar);
