import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

import userRoute from './routes/user.route.js';

app.use('/api/user', userRoute);

export default app;
