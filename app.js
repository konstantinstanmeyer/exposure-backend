import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import postRoutes from './routes/post.js';
import authRoutes from './routes/auth.js'
import categoryRoutes from './routes/category.js';
import suggestionRoutes from './routes/suggestion.js';
import userRoutes from './routes/user.js';

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

app.use(suggestionRoutes);

app.use(postRoutes);

app.use(authRoutes);

app.use(categoryRoutes);

app.use(userRoutes);

const PORT = process.env.PORT || 3001;

mongoose
  .connect(
    process.env.MONGO_URL
  )
  .then(result => {
    app.listen(PORT);
  })
  .catch(err => console.log(err));