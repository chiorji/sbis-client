'use strict';
const staffRoute = require('../staff/staffRoutes');
const studentRoute = require('../students/studentRoutes');
const resultRoute = require('../results/resultsRoutes');

module.exports = (app) => {
  app.use('/staff', staffRoute);
  app.use('/students', studentRoute);
  app.use('/results', resultRoute);

  return app;
};
