import express from 'express';
import mongoose from 'mongoose';
import apiRoutes from './routes/api';
import { getApiBaseUrl, PORT } from './config';

const app = express();
const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/octofit_db';

app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    message: 'OctoFit Tracker API is running',
    apiBaseUrl: getApiBaseUrl(),
  });
});

app.use('/api', apiRoutes);

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Backend listening on port ${PORT}`);
      console.log(`API base URL: ${getApiBaseUrl()}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  });
