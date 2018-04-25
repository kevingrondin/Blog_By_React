import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, withRouter } from 'react-router-dom';

import App from './components/App';

import AuthService from './services/auth';

import registerServiceWorker from './registerServiceWorker';

const Main = withRouter(props => ((
  <App authService={new AuthService()} {...props} />
)));

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>
  , document.getElementById('root'),
);
registerServiceWorker();
