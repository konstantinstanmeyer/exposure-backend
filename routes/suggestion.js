import express from 'express';

import auth from "../middleware/auth.js";

import { postSuggestion } from '../controllers/suggestion.js';

const router = express.Router();

router.post('/suggestion', auth, postSuggestion);

// router.get('/admin/suggestions', auth, getSuggestions);

export default router;