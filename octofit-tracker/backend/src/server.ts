import express from 'express';
import apiRoutes from './routes/api';
import { PORT } from './config';
import { connectDatabase } from './config/database';

export const createServer = () => {
  const app = express();

  app.use(express.json());

  app.get('/api/health', (_req, res) => {
    const codespaceName = process.env.CODESPACE_NAME;
    const apiBaseUrl = codespaceName
      ? `https://${codespaceName}-8000.app.github.dev`
      : 'http://localhost:8000';

    res.json({
      status: 'ok',
      message: 'OctoFit Tracker API is running',
      apiBaseUrl,
    });
  });

  app.use('/api', apiRoutes);

  return app;
};

export const startServer = async () => {
  const app = createServer();
  await connectDatabase();

  app.listen(PORT, '0.0.0.0', () => {
    const codespaceName = process.env.CODESPACE_NAME;
    const apiBaseUrl = codespaceName
      ? `https://${codespaceName}-8000.app.github.dev`
      : 'http://localhost:8000';

    console.log(`Backend listening on port ${PORT}`);
    console.log(`API base URL: ${apiBaseUrl}`);
  });
};
