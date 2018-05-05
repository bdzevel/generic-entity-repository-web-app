import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import NotificationBar from './notification-bar';

const NotificationContainer = function(props) {
  if (!props.latest) {
    return null;
  }
  return <NotificationBar {...props.latest} />;
};

NotificationContainer.propTypes = {
  latest: PropTypes.shape({
    type: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }),
};

const mapStateToProps = state => state.notification;
export default connect(mapStateToProps)(NotificationContainer);
