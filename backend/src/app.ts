import express, { Application } from 'express';
import cors from 'cors';
import 'dotenv/config';
import path from 'path';

const app: Application = express();
app.use(express.json());
app.use(cors());

// Import routes
import gameRoute from './routes/gameRoute';
import authRoute from './routes/authRoutes';

// Declare routes paths
app.use('/api/games', gameRoute);
app.use('/api/auth', authRoute);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../frontend/dist'));
  app.get('*', function (req, res) {
    res.sendFile('index.html', {
      root: path.join(__dirname, '../../frontend/dist/'),
    });
  });
}

export { app };
