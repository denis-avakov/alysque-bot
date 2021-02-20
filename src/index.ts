import express from './config/express';
import logger from './config/logger';

express.listen(2000, () => {
  logger.info('Server started');
});

export default express;
