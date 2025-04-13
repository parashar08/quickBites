import jwt from 'jsonwebtoken';
import { User } from '../models/user.model.js';

export const userAuth = async (req, res, next) => {
  try {
    const token =
      req.cookies.token || req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      return res.status(401, 'No token recieved by server!');
    }

    const decodedToken = jwt.verify(token, process.env.JWT_TOKEN_SECRET);

    const user = await User.findById(decodedToken?._id);

    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid token' });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log('Authentication error!', error);
    return res
      .status(500)
      .json({
        success: false,
        message: error.message || 'Authentication failed',
      });
  }
};
