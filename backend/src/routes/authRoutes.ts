import { Router } from 'express';
import {
  getCurrentUser,
  loginUser,
  registerUser,
} from '../controllers/authController';

const router: Router = Router();

// "api/auth/***"
router.post('/login', loginUser);
router.post('/register', registerUser);
router.get('/me', getCurrentUser);

export default router;
