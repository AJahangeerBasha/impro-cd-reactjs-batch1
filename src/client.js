import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import Login from './components/login';
import Home from './components/home';
import About from './components/about';


ReactDOM.render(
  <AppContainer>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
          <IndexRoute component={Login} />
		  <Route path="login" component={Login}/>
          <Route path="home" component={Home}/>
          <Route path="about" component={About}/>		  
      </Route>
    </Router>
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
