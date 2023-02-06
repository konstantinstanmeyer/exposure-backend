import express from 'express';

import auth from "../middleware/auth";

import { postSuggestion } from '../controllers/suggestion';

const router = express.Router();

router.post('/suggestion', auth, postSuggestion);

export default router;