import express from 'express';
import serverRender from './renderers/server';
import config from './config';
import Data from './SwitchData';

const server = express();
server.use(express.static('dist'));

server.set('view engine', 'ejs');

//Create API
server.get('/data', (req, res) => {
  res.send(Data);
});

//Create server
server.get('/', async (req, res) => {
  const initialContent = await serverRender();
  res.render('index', { ...initialContent });
});

server.listen(config.port, function listenHandler() {
  console.info(`Running on ${config.port}...`);
});