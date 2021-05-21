'use strict';
const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const tooBusy = require('./tooBusy');
const appConfig = require('../configs/appConfig')(process.env.NODE_ENV);

module.exports = (app) => {
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // TODO: whitelist for cors (domain, header or API Key)
  app.use('*', cors());

  // Enable pre-flight checks
  app.options('*', cors());

  // Use logger only on dev
  if ((appConfig.envName.toLowerCase() !== 'production' &&
    (appConfig.envName.toLowerCase() !== 'test'))) {
    app.use(logger('dev'));
  }

  app.use(tooBusy);
  return app;
};
