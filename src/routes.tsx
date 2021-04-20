import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Create from './pages/create';
import List from './pages/list';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/create" exact component={Create} />
      <Route path="/list" exact component={List} />
    </Switch>
  )
}

export default Routes;
