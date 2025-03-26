const Router = require('express');
const { signupUser } = require('../controllers/user');

const router = Router();

router.route('/signup').post(signupUser);
