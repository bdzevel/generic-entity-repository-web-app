import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import clientService from '../../services/client-service';

class ClientDetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.match.params.name,
      isInitialized: false,
    };
    this.initialize();
  }

  initialize() {
    clientService.getClient(this.props.match.params.name)
      .then(c => this.setState({ name: c.name, friendlyName: c.friendlyName, isInitialized: true }));
  }

  render() {
    if (!this.props.profile || !this.props.profile.isAdmin || !this.props.profile.isAuthenticated) {
      return <Redirect to="/" />;
    }
    return (
      <div className="client-details-page">
        { !this.state.isInitialized ? <h4>LOADING...</h4> : null }
        <h3>Name: {this.state.name}</h3>
        <h3>Friendly Name: {this.state.friendlyName}</h3>
      </div>
    );
  }
}

ClientDetailsPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  profile: PropTypes.shape({
    isAuthenticated: PropTypes.bool.isRequired,
    isAdmin: PropTypes.bool.isRequired,
  }).isRequired,
};

const mapStateToProps = state => state.user;
export default connect(mapStateToProps)(ClientDetailsPage);
