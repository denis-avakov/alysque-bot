import express from 'express';
import routes from '../API/routes/v1';

const app = express();
app.use('/api', routes);

export default app;
