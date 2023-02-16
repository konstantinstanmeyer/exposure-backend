import express from "express";

import auth from '../middleware/auth.js';
import { findUserByUsername, getImageUrl } from "../controllers/user.js";

const router = express.Router();

router.get('/profile/:username', auth, findUserByUsername);

router.get('/imageUrl', auth, getImageUrl);

export default router;