import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
// import taskRoutes from './routes/tasks';

dotenv.config();

const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.