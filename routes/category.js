import express from 'express';

import { addCategory, getCategories, addSubCategory, getSubCategories } from '../controllers/category.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/add-category', auth, addCategory);

router.get('/categories', auth, getCategories);

router.post('/add-sub-category', auth, addSubCategory);

router.get('/sub-categories/:category/:obscurity/:page', auth, getSubCategories);

export default router;