import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import Main from './containers/Main';

import { createStore, compose, applyMiddleware } from 'redux';
import persistState from './middleware/persistState';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import reducer from './reducers';
import './style.css';





const createPersistentStore = compose(
  applyMiddleware(persistState('rememberapp', 'main', 'locations'))
  )(createStore);

   
/*
    const createPersistentStore = compose(
    applyMiddleware(promise),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);
*/

render(
  <Provider store={ createPersistentStore(reducer) }>
    <Router history={ hashHistory } >
      <Route path="/" component={ App }>
       <IndexRoute component={ Main }/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('react-root')
);
