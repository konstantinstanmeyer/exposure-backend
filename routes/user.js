import express from "express";

import auth from '../middleware/auth.js';
import { findUserByUsername } from "../controllers/user.js";

const router = express.Router();

router.get('/profile/:username', auth, findUserByUsername);

export default router;