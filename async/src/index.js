import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducer from './reducers'
import App from './containers/App'
import { composeWithDevTools } from 'redux-devtools-extension'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
