import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import SearchPage from './components/search/SearchPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={SearchPage} />
    <Route path="search" component={SearchPage} />
    </Route>
);