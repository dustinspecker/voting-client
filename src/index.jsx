import App from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';
import Results from './components/Results';
import Router, {Route} from 'react-router';
import Voting from './components/Voting';

const pair = ['Trainspotting', '28 Days Later'];

const routes = <Route component={App}>
  <Route path='/results' component={Results} />
  <Route path='/' component={Voting} />
</Route>;

ReactDOM.render(
  <Router>{routes}</Router>,
  document.getElementById('app')
);
