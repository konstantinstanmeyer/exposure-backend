import express from 'express';

import { addCategory, getCategories, addSubCategory, getSubCategories } from '../controllers/category.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/add-category', auth, addCategory);

router.get('/categories', getCategories);

router.post('/add-sub-category', auth, addSubCategory);

router.get('/sub-categories/:category/:page', getSubCategories);

export default router;