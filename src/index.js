import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';
import { addCharacterById } from './actions';

import App from './components/App';

// Create store by defining const and set it equal to store
const store = createStore(rootReducer);
console.log('store.getState()', store.getState());
store.subscribe(() => console.log('store', store.getState()));
store.dispatch(addCharacterById(2));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);
