/* eslint-disable no-unused-vars, no-console */
const app = require('./index');
const appConfig = require('./configs/appConfig')(process.env.NODE_ENV);

const server = app.listen(appConfig.port, function () {
  console.log('Server listening on port ' + appConfig.port);
});
