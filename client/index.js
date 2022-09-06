import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';

import styles from './stylesheets/styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />,
    </Provider>,
  </React.StrictMode>
);