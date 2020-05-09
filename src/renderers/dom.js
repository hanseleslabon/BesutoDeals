import React from 'react';
import ReactDOM from 'react-dom';

import App from '../components/AppWrapper';
import StateApi from '../state-api';


const store = new StateApi(window.initialData);

ReactDOM.hydrate(
    <App />,
    document.getElementById('root'),
);
