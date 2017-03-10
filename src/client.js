import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import App from './components/App';
import Login from './components/login';
import Home from './components/home';
import About from './components/about';
import Dashboard from './components/dashboard';
import UserStoryPage from './components/userstory/userstoryPage';
import UserstoryManager from './components/userstory/UserstoryManager';
import reduxStore from './stores';
import { loadUserstories } from './actions/userstoryAction';

const store = reduxStore();
store.dispatch(loadUserstories());

ReactDOM.render(
  <AppContainer>
    <Provider store={ store }>
      <Router history={ browserHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ Login } />
          <Route name="login" path="login" component={ Login } />
          <Route name="home" path="home" component={ Home } />
          <Route name="about" path="about" component={ About } />
          <Route name="dashboard" path="dashboard" component={ Dashboard } />
          <Route name="userstory" path="userstory" component={ UserStoryPage } />
          <Route path="userstory/create" component={ UserstoryManager } />
          <Route path="userstory/edit/:id" component={ UserstoryManager } />
          <Route path="userstory/delete/:id" component={ UserstoryManager } />
        </Route>
      </Router>
    </Provider>
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default; // eslint-disable-line global-require
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
