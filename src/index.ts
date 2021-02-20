import express from './config/express';
import logger from './config/logger';
import vars from './config/vars';

express.listen(vars.port, () => {
  logger.info(`Server started on port ${vars.port} (${vars.env}) 🌿 🌿 🌿`);
});

export default express;
