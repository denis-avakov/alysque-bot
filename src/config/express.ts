import express from 'express';
import compress from 'compression';
import helmet from 'helmet';
import routes from '../API/routes/v1';

const app = express();

// gzip compression
app.use(compress());

// secure apps by setting various HTTP headers
app.use(helmet());

app.use('/api', routes);

export default app;
