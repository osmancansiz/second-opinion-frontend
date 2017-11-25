import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Router} from "react-router-dom";
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import store from "./store/createStore";
import {createBrowserHistory} from "history";
import {IntlProvider} from "react-intl-redux";

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider>
      <Router history={history}>
        <App/>
      </Router>
    </IntlProvider>
  </Provider>
  
  , document.getElementById('root'));
registerServiceWorker();
