import express from 'express';
const app = express();

app.use(express.json());

import router from './routes';
app.use(router);

export default app;