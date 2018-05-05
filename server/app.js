const express = require('express');
const winston = require('winston');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
winston.level = process.env.TRACE_LEVEL || 'info';

const PUBLIC_RESOURCE_FOLDER_PATH = path.resolve(__dirname, '..', 'public');

const app = express();
app.use('/assets', express.static(PUBLIC_RESOURCE_FOLDER_PATH));

app.get('/*', function(req, res) {
  res.sendFile(path.join(PUBLIC_RESOURCE_FOLDER_PATH, 'index.html'));
});

// eslint-disable-next-line no-unused-vars
app.use(function(err, req, res, next) {
  winston.error(err.message, err.stack);
  res.status(500).end();
});

const port = process.env.PORT || 3002;
app.listen(port);
winston.info(`Finished bootstrapping. Listening on ${port}.`);

module.exports = app;
