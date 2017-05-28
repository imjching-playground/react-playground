import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(reducer)

const myRender = () => render(
  <App value={store.getState()}
       onIncrement={() => store.dispatch({type: 'INCREMENT'})}
       onDecrement={() => store.dispatch({type: 'DECREMENT'})} />,
  document.getElementById('root')
);

myRender();
store.subscribe(myRender);
registerServiceWorker();
