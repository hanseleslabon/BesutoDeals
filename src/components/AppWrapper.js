import React, { Fragment } from 'react';
import store from '../stores/configureStore';
import { Provider } from 'react-redux'
import App from './App'

const AppWrapper = (props) => {
  return (
    <Provider store={store}>
      <App initialData={props.initialData} />
    </Provider>
  );
};

export default AppWrapper;