import 'whatwg-fetch';
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import userService from './services/user-service';

import store from './store/app-store';

import Layout from './components/layout/layout';

function initializeApp() {
  return userService.retrieveUserProfile();
}

const App = function() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </Provider>
  );
};

initializeApp()
  .then(() => render(<App />, document.getElementById('app')));
