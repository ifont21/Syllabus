import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import promise from 'redux-promise';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

render(
    <Provider store={ createStoreWithMiddleware(reducers) } >
      <Router history={browserHistory} routes={routes}/>
    </Provider>
    , document.querySelector('.container')
);





