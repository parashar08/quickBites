import { asyncHandler } from '../utils/asyncHandler.js';
import {
  validateSignupData,
  validateLoginData,
} from '../validation/user.validation.js';
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

export const loginUser = asyncHandler(async (req, res) => {
  validateLoginData(req);
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError(404, "user doesn't exists!");
  }

  const isPasswordValid = await user.isCorrectPassword(password);

  if (!isPasswordValid) {
    throw new ApiError(401, 'Invalid user credentials');
  }

  const jwtToken = await user.getJWT();

  const loggedInUser = await User.findById(user._id).select(
    '-password -photoUrl'
  );

  return res
    .status(200)
    .cookie('token', jwtToken, { maxAge: 10 * 3600000, httpOnly: true })
    .json(
      new ApiResponse(
        200,
        { user: loggedInUser, jwtToken },
        'user logged successfully!'
      )
    );
});

export const updateUser = asyncHandler();
