import express from 'express';

import bodyParser from 'body-parser';
import routes from './routes/Routes';

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(routes);

export default app;
