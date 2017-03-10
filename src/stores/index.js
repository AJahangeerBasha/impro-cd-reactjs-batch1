// configure store
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// import rootReducer from '../reducers';
// import rootReducer from '../reducers';
import reducers from '../reducers';

// reduxStore = configureStore
function reduxStore(initialState) {
  // const store = createStore(reducers, initialState,
  //   window.devToolsExtension && window.devToolsExtension());

  const store = createStore(reducers, initialState, applyMiddleware(thunk));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      // We need to require for hot reloadign to work properly.
      const nextReducer = require('../reducers');  // eslint-disable-line global-require

      store.replaceReducer(nextReducer);
    });
  }
  return store;
}

export default reduxStore;
