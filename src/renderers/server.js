import React, { Fragment } from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';

import App from '../components/AppWrapper';
import config from '../config';

import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme/theme';



const serverRender = async () => {
  const resp = await axios.get(`http://${config.host}:${config.port}/data`);

  const sheets = new ServerStyleSheets();

  const html = sheets.collect(ReactDOMServer.renderToString(
    <ThemeProvider theme={theme}>
      <App initialData={resp.data} />
    </ThemeProvider>),
  );
  const css = sheets.toString();
  return {
    initialMarkup: html,
    initialData: resp.data,
    css: css,
  };
};

export default serverRender;
