import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
};

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use(cors(corsOptions));

import userRoute from './routes/user.route.js';

app.use('/api/user', userRoute);

export default app;
