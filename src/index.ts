import express from './config/express';

express.listen(2000, () => {
  console.log('Server started');
});

export default express;
