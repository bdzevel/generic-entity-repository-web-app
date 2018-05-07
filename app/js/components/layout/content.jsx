import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/home-page';
import LoginPage from '../pages/login-page';
import ClientManagement from '../pages/client-management-page';
import ClientDetails from '../pages/client-details-page';

const Content = function() {
  return (
    <div className="main-content">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/client-management" component={ClientManagement} />
        <Route exact path="/client/:name" component={ClientDetails} />
      </Switch>
    </div>
  );
};

export default Content;
