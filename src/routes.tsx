import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import CreateForm from './pages/list/form';
import List from './pages/list';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/create-character" exact component={CreateForm} />
      <Route path="/list-character" exact component={List} />
    </Switch>
  )
}

export default Routes;
