import express from 'express';

import { addCategory, getCategories } from '../controllers/category.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/add-category', auth, addCategory);

router.get('/categories', getCategories);

export default router;