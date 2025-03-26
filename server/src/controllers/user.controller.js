import { asyncHandler } from '../utils/asyncHandler.js';
import { validateSignupData } from '../utils/validation.js';
import { User } from '../models/user.model.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';

export const signupUser = asyncHandler(async (req, res) => {
  validateSignupData(req);
  const { fullName, email, password, role } = req.body;

  const existedUser = await User.findOne({ email });

  if (existedUser) {
    throw new ApiError(409, 'user with this email already exist!');
  }

  const user = new User({
    fullName,
    email,
    password,
    role,
  });

  const savedUser = await user.save();

  return res
    .status(200)
    .json(new ApiResponse(200, savedUser, 'user created successfully!'));
});
