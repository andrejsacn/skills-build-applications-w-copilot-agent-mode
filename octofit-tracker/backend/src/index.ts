import express from 'express';
import apiRoutes from './routes/api';
import { getApiBaseUrl, PORT } from './config';
import { connectDatabase } from './config/database';

const app = express();

app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    message: 'OctoFit Tracker API is running',
    apiBaseUrl: getApiBaseUrl(),
  });
});

app.use('/api', apiRoutes);

connectDatabase()
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
