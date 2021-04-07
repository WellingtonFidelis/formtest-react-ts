import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home'
import List from './pages/List'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/lista" exact component={List} />
    </Switch>
  )
}

export default Routes;
