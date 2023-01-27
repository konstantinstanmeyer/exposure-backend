import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import postRoutes from './routes/posts.js';
import authRoutes from './routes/auth.js'

dotenv.config();

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(postRoutes);

app.use(authRoutes);

const PORT = process.env.PORT || 3001;

mongoose
  .connect(
    process.env.MONGO_URL
  )
  .then(result => {
    app.listen(PORT);
  })
  .catch(err => console.log(err));