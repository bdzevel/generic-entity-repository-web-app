import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const ClientListItem = function(props) {
  const { name, friendlyName } = props.client;
  return (
    <li className="client-list-item">
      <span>{ friendlyName }</span> <Link to={`/client/${name}`}>EDIT</Link>
    </li>
  );
};

ClientListItem.propTypes = {
  client: PropTypes.shape({
    name: PropTypes.string.isRequired,
    friendlyName: PropTypes.string.isRequired,
  }).isRequired,
};

export default ClientListItem;
