import express from 'express';

import { addCategory, getCategories, addSubCategory } from '../controllers/category.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/add-category', auth, addCategory);

router.get('/categories', getCategories);

router.post('/add-sub-category', auth, addSubCategory);

export default router;