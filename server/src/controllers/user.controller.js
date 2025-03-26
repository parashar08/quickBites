import { validateSignupData } from '../utils/validation.js';
import { User } from '../models/user.model.js';

export const signupUser = async (req, res) => {
  try {
    validateSignupData(req);
    const { fullName, email, password, role } = req.body;

    const existedUser = await User.findOne({ email });

    if (existedUser) {
      throw new Error('user with this email exist.');
    }

    const user = new User({
      fullName,
      email,
      password,
      role,
    });

    const savedUser = user.save();

    return res
      .status(200)
      .json({ message: 'user added successfully', data: savedUser });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
