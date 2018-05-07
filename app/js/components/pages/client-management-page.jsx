import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import clientService from '../../services/client-service';

import ClientList from '../admin/client-list';

class ClientManagementPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clients: [] };
    this.initialize();
  }

  initialize() {
    clientService.getAllClients()
      .then(clients => this.setState({ clients }));
  }

  render() {
    if (!this.props.profile || !this.props.profile.isAdmin || !this.props.profile.isAuthenticated) {
      return <Redirect to="/" />;
    }
    return (
      <ClientList clients={this.state.clients} />
    );
  }
}

ClientManagementPage.propTypes = {
  profile: PropTypes.shape({
    isAuthenticated: PropTypes.bool.isRequired,
    isAdmin: PropTypes.bool.isRequired,
  }).isRequired,
};

const mapStateToProps = state => state.user;
export default connect(mapStateToProps)(ClientManagementPage);
