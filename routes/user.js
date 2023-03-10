import express from "express";

import auth from '../middleware/auth.js';
import { findUserByUsername, getImageUrl, getProfileEdit, postProfileEdit } from "../controllers/user.js";

const router = express.Router();

router.get('/profile/:username', auth, findUserByUsername);

router.get('/imageUrl', auth, getImageUrl);

router.get('/profile', auth, getProfileEdit);

router.post('/profile', auth, postProfileEdit);

export default router;