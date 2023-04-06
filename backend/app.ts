import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';

const app: Application = express();
app.use(express.json());

// Import routes

// Declare routes paths
app.get('/', (req: Request, res: Response) => {
  res.send('It works!');
});

export { app };
