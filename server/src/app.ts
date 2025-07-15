import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes';

const app = express();

// CORS FIRST!
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

app.use('/api/auth', authRoutes);

export default app;