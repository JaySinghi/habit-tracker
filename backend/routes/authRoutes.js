import express from 'express';
import { loginUser } from '../controllers/authController.js'; // Import the login function

const router = express.Router();

// POST route for user login
router.post('/login', loginUser);

export default router;
