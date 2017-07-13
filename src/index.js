/**
 * Created by trieutran on 7/7/17.
 */
import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App.jsx';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers';

const store = createStore(reducer);

ReactDom.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById('root')
);