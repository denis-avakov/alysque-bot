import express from 'express';
import morgan from 'morgan';
import compress from 'compression';
import helmet from 'helmet';
import vars from './vars';
import routes from '../API/routes';

const app = express();

// request logging. dev: console | production: file
app.use(morgan(vars.logsFormat));

// gzip compression
app.use(compress());

// secure apps by setting various HTTP headers
app.use(helmet());

app.use('/api', routes);

export default app;
