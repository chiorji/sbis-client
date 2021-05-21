'use strict';
const staffRoute = require('../staff/staffRoutes');
const studentRoute = require('../students/studentRoutes');

module.exports = (app) => {
  app.use('/staff', staffRoute);
  app.use('/student', studentRoute);

  return app;
};