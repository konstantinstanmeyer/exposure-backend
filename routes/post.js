import { postAddProduct, getSubCategoryPosts, getPostById, getEditPost, postEditPost } from '../controllers/posts.js';

import auth from '../middleware/auth.js';

import express from 'express';

const router = express.Router();

router.post('/post', auth, postAddProduct);

router.get('/posts/:category/:subCategory', auth, getSubCategoryPosts);

router.get('/post/:id', auth, getPostById);

router.get('/edit/:id', auth, getEditPost);

router.post('/edit/:id', auth, postEditPost);

export default router;