import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { getAllProducts } from './actions'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker';

const middleware = [ thunk, createLogger() ];
const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

store.dispatch(getAllProducts());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
