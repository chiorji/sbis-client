exports.mochaGlobalSetup = async function () {
  process.env.NODE_ENV = 'test';
  require('dotenv').config();
  if (!global.Promise) {
    global.Promise = require('q');
  }
};
