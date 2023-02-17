import express from 'express';

import auth from "../middleware/auth.js";

import { postSuggestion, getSuggestions, deleteById } from '../controllers/suggestion.js';

const router = express.Router();

router.post('/suggestion', auth, postSuggestion);

router.get('/admin/suggestions', auth, getSuggestions);

router.post('/admin/suggestion/:id', auth, deleteById)

export default router;