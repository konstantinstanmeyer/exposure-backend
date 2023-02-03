import express from 'express';

import { addCategory } from '../controllers/category.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/add-category', auth, addCategory);

export default router;