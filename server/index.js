'use strict';
/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const appConfig = require('./configs/appConfig')(process.env.NODE_ENV);

const app = express();

// Kick off early database connection
require('./configs/dbConfig')(appConfig);

// Add pre-route middleware
require('./middlewares/preRoute')(app);
require('./routes')(app);
require('./middlewares/postRoute');

// Checks if app is required as a module or ran directly
if (require.main === module) {
  app.listen(appConfig.port, () => {
    console.log(`App running as standalone on ${appConfig.port}`);
  });
} else {
  module.exports = app;
}
