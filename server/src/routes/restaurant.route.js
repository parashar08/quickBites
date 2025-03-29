import { Router } from 'express';
import { userAuth } from '../middlewares/auth.middleware.js';
import { upload } from '../middlewares/multer.middleware.js';
import { registerRestaurant } from '../controllers/restaurant.controller.js';

const router = Router();

router
  .route('/register')
  .post(userAuth, upload.single('avatar'), registerRestaurant);
router.route('/update').post(userAuth);

export default router;
