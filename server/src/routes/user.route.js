import express from 'express';
import { signup, login, logout } from '../controllers/user.controller.js';
import { userAuth } from '../middlewares/userAuth.js';

const router = express.Router();

router.route('/signup').post(signup);
router.route('/login').post(login);
router.route('/logout').post(userAuth, logout);

export default router;
