import React, { PropTypes } from 'react';
import { Router, Route, Redirect, IndexRoute, Link } from 'dva/router';
import Pools from './routes/Pools';
import PoolPage from './routes/PoolPage';
import NotFound from './routes/NotFound';

export default ({ history }) => {
  return (
    <Router history={history}>
      <Redirect from="/" to="/pools" />
      <Route path="/pools" component={Pools} />
      <Route path="/pools/:poolId" component={PoolPage} />
      <Route path="*" component={NotFound} />
    </Router>
  );
};
