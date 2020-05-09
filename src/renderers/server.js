import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import StateApi from '../state-api';

import App from '../components/AppWrapper';
import config from '../config';



const serverRender = async () => {
  const resp = await axios.get(`http://${config.host}:${config.port}/data`);
  const store = new StateApi(resp.data);

  return {
    initialMarkup: ReactDOMServer.renderToString(
      <App />
    ),
    initialData: resp.data,
  };
};

export default serverRender;
