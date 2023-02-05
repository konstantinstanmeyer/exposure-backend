import { postAddProduct, getSubCategoryPosts } from '../controllers/posts.js';

import auth from '../middleware/auth.js';

import express from 'express';

const router = express.Router();

router.post('/post', auth, postAddProduct);

router.get('/posts/:category/:subCategory', auth, getSubCategoryPosts);

export default router;