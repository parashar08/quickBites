import { Router } from 'express';
import {
  signupUser,
  loginUser,
  updateUser,
  logoutUser,
} from '../controllers/user.controller.js';
import { userAuth } from '../middlewares/auth.middleware.js';

const router = Router();

router.route('/signup').post(signupUser);
router.route('/login').post(loginUser);
router.route('/update').post(userAuth, updateUser);
router.route('/logout').post(userAuth, logoutUser);

export default router;
