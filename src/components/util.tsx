import React from 'react';
import { Provider } from 'react-redux';

import { render } from '@testing-library/react';
import App from '../App';
import store from '../redux/store';

export const setUpApp = () =>
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
