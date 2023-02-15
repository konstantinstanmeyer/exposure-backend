import { postAddProduct, getSubCategoryPosts, getPostById, getEditPost } from '../controllers/posts.js';

import auth from '../middleware/auth.js';

import express from 'express';

const router = express.Router();

router.post('/post', auth, postAddProduct);

router.get('/posts/:category/:subCategory', auth, getSubCategoryPosts);

router.get('/post/:id', auth, getPostById);

router.get('/edit/:id', auth, getEditPost);

export default router;