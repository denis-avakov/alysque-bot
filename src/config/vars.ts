// eslint-disable-next-line
require('dotenv-safe').config();

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  logsFormat: process.env.NODE_ENV === 'production' ? 'combined' : 'dev'
};
