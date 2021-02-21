import database from './config/database';
import express from './config/express';
import logger from './config/logger';
import vars from './config/vars';

const initDatabase = (): Promise<any> =>
  new Promise((resolve) => database.ref().once('value', resolve));

const initExpress = () =>
  express.listen(vars.port, () => {
    logger.info(`Server started on port ${vars.port} (${vars.env}) 🌿 🌿 🌿`);
  });

// prettier-ignore
export default Promise.resolve()
  .then(initDatabase)
  .then(initExpress)
  .catch(logger.error);
