import { postAddProduct } from '../controllers/posts.js';

import express from 'express';

const router = express.Router();

router.post('/posts', postAddProduct);

export default router;