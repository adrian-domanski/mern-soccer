import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';

const app: Application = express();
app.use(express.json());
app.use(cors());

// Import routes
import gameRoute from './routes/gameRoute';

// Declare routes paths
app.use('/api/games', gameRoute);

export { app };
