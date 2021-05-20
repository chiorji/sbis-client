
/** Map database connection depending on the execution environment.
    This will make app modular and perform differently on different ground
    without needs for re-confguration.
    Therefore; we can now set process.env.NODE_ENV=test on test files
 * @param {*} env Node environment
 * @returns Object
 */
module.exports = (env = 'dev') => {
  const envs = {
    dev: {
      port:    process.env.DEV_PORT,
      dbUri:   process.env.DEV_DB_URI,
      envName: 'dev'
    },

    test: {
      port:    process.env.TEST_PORT,
      dbUri:   process.env.TEST_DB_URI,
      envName: 'test'
    },

    production: {
      port:    process.env.PORT,
      dbUri:   process.env.MONGO_URI,
      envName: 'production'
    }
  };

  if (env && env.trim() === 'development') env = 'dev'; // maps "development" to "dev"
  /*
        We return dev by default if no environment arg is passed
        This is because node will automatically be set to 'production'
        if runing on a production environment
    */
  return (typeof (env) !== 'string' || envs[env] === 'undefined') ? envs.dev : envs[env];
};
