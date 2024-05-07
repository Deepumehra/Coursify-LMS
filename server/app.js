import cookieParser from 'cookie-parser';
import cors from 'cors';
import { config } from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import errorMiddleware from './middlewares/error.middleware.js';
config();

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Third-Party
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    credentials: true,
  })
);

app.use(morgan('dev'));
app.use(cookieParser());
// Server Status Check Route
app.get('/ping', (_req, res) => {
    res.send('Pong');
  });

app.all('*', (_req, res) => {
    res.status(404).send('OOPS!!! 404 Page Not Found');
});
// Import all routes
import userRoutes from './routes/user.routes.js';


app.use('/api/v1/user',userRoutes);
// Custom error handling middleware
app.use(errorMiddleware);
  
export default app;