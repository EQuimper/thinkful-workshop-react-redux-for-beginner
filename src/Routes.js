import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import PrivateRouteAdmin from './components/PrivateRouteAdmin';

import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';

export default () => (
  <Switch>
    <PrivateRoute exact path="/" component={HomePage} />
    <PrivateRouteAdmin exact path="/admin" component={AdminPage} />
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/signup" component={SignupPage} />
  </Switch>
);
