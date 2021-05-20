/* eslint-disable no-console */
const mongoose = require('mongoose');

/**
 * Uses configuration args to determine execution environment
 * @param {*} config configuration
 */
module.exports = (config) => {
  mongoose.connect(config.dbUri, {
    useNewUrlParser:    true,
    useUnifiedTopology: true,
    useFindAndModify:   false
  }).then(() => {
    console.log((`Mongoose connection open on ${config.dbUri}`));
  }).catch(err => {
    console.log(`Mongoose connection to ${config.dbUri} errored!`, err.message);
    process.exit(1);
  });

  // Set mongoose debugging only on dev
  if ((config.envName.toLowerCase() !== 'production') && (config.envName.toLowerCase() !== 'test')) {
    mongoose.set('debug', true);
  } else {
    mongoose.set('debug', false);
  }

  mongoose.Promise = global.Promise;
};
