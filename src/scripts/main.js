import React from 'react';
import { render } from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { identity } from 'lodash';
import thunk from 'redux-thunk';
import App from './components/App';
import rootReducer from './reducers/root';

function main() {
  const target = document.getElementById('main');
  const devTools = window.devToolsExtension ? window.devToolsExtension() : identity;
  const finalCreateStore = compose(applyMiddleware(thunk), devTools)(createStore);
  const store = finalCreateStore(rootReducer);
  render((
    <Provider store={store}>
      <App />
    </Provider>
  ), target);
}

main();
