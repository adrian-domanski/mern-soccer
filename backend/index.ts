import mongoose from 'mongoose';
import { app } from './app';

const port: string | undefined = process.env.PORT;

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL!);
    console.log('Connected to MongoDB ✅');
    app.listen(port, () => console.log(`Listening on port ${port}`));
  } catch (error) {
    console.log('Error connecting to MongoDB ❌');
    console.error(error);
  }
};

startServer();
