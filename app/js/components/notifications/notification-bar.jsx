import React from 'react';
import PropTypes from 'prop-types';

import notificationService from '../../services/notification-service';

class NotificationBar extends React.Component {
  constructor(props) {
    super(props);
    this.initHandlers();
  }

  initHandlers() {
    this.handleDismiss = this.handleDismiss.bind(this);
  }

  handleDismiss(e) {
    e.preventDefault();
    notificationService.dismiss();
  }

  render() {
    const className = `notification-bar ${this.props.type}`;
    return (
      <div className={className}>
        {this.props.message} <a className="btn" href="#" onClick={this.handleDismiss}>X</a>
      </div>
    );
  }
}

NotificationBar.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default NotificationBar;
