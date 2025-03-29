import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

const corsOptions = {
  origin: process.env.CORS_ORIGIN,
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static('public'));
app.use(cookieParser());

import userRouter from './routes/user.route.js';
import restaurantRouter from './routes/restaurant.route.js';

app.use('/api/v1/user', userRouter);
app.use('/api/v1/restaurant', restaurantRouter);

export default app;
