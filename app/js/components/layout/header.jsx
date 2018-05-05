import React from 'react';

import NavBar from '../navigation/navbar';
import NotificationContainer from '../notifications/notification-container';

const Header = function() {
  return (
    <div className="header">
      <NavBar />
      <NotificationContainer />
    </div>
  );
};

export default Header;
