import express from 'express';
import cookieParser from 'cookie-parser';
import { errorHandler } from './utils/errorHandler.js';

const app = express();

app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(cookieParser());

// global error handler
app.use(errorHandler);

export default app;
