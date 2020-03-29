import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './Route';

import Logon from '~/pages/Logon';
import Register from '~/pages/Register';
import Profile from '~/pages/Profile';
import NewIncident from '~/pages/NewIncident';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/register" component={Register} />

        <Route path="/profile" isPrivate component={Profile} />
        <Route path="/incidents/new" isPrivate component={NewIncident} />
      </Switch>
    </BrowserRouter>
  );
}
