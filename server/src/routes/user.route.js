import { Router } from 'express';
import {
  signupUser,
  loginUser,
  updateUserDetails,
  logoutUser,
  refreshAccessToken,
} from '../controllers/user.controller.js';
import { userAuth } from '../middlewares/auth.middleware.js';
import { upload } from '../middlewares/multer.middleware.js';

const router = Router();

router.route('/signup').post(signupUser);
router.route('/login').post(loginUser);
router
  .route('/update')
  .post(userAuth, upload.single('avatar'), updateUserDetails);
router.route('/refresh-token').post(refreshAccessToken);
router.route('/logout').post(userAuth, logoutUser);

export default router;
