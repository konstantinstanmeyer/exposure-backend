import { postAddProduct, getSubCategoryPosts, getPostById } from '../controllers/posts.js';

import auth from '../middleware/auth.js';

import express from 'express';

const router = express.Router();

router.post('/post', auth, postAddProduct);

router.get('/posts/:category/:subCategory', auth, getSubCategoryPosts);

router.get('/post/:id', auth, getPostById);

export default router;