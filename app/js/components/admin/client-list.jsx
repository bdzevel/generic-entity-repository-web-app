import React from 'react';
import PropTypes from 'prop-types';

import ClientListItem from './client-list-item';

const ClientList = function(props) {
  const clients = props.clients;
  return (
    <div className="client-list-container">
      <h1>Client List</h1>
      <ul className="client-list">
        { clients.map(c => <ClientListItem key={c.name} client={c} />) }
      </ul>
    </div>
  );
};

ClientList.propTypes = {
  clients: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    friendlyName: PropTypes.string.isRequired,
  })).isRequired,
};

export default ClientList;
