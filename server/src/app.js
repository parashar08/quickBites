import express from 'express';
import connectDB from './config/database.js';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(cookieParser());

const PORT = 3000;

export default app;
