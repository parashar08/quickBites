import { User } from '../models/user.model.js';
import { signupSchema, loginSchema } from '../validations/user.validation.js';

export const signup = async (req, res) => {
  try {
    const validationResult = signupSchema.safeParse(req.body);

    if (!validationResult.success) {
      return res.status(400).json({
        message: 'Validation Failed',
        errors: validationResult.error.issues.map((err) => ({
          field: err.path.join('.'),
          message: err.message,
        })),
      });
    }

    const { fullName, email, role, phoneNumber, password } =
      validationResult.data;

    const existingUser = await User.findOne({
      $or: [{ email }, { phoneNumber }],
    });

    if (existingUser) {
      return res.status(400).json({
        message:
          existingUser.email === email
            ? 'Email already in use'
            : 'PhoneNumber already in use',
      });
    }

    const newUser = await User.create({
      fullName,
      email,
      role,
      phoneNumber,
      password,
    });

    const userResponse = { ...newUser.toObject() };
    delete userResponse.password;
    delete userResponse.refreshToken;

    return res.status(201).json({
      success: true,
      data: userResponse,
      message: 'User created successfully!',
    });
  } catch (error) {
    console.log('Signup error!', error);
    return res.status(500).json({
      message: error.message || 'Internal Server Error',
    });
  }
};

export const login = async (req, res) => {
  try {
    const validationResult = loginSchema.safeParse(req.body);

    if (!validationResult.success) {
      return res.status(400).json({
        message: 'Validation Failed',
        errors: validationResult.error.issues.map((err) => ({
          field: err.path.join('.'),
          message: err.message,
        })),
      });
    }

    const { email, password } = validationResult.data;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid email' });
    }

    const isPasswordCorrect = await user.comparePassword(password);

    if (!isPasswordCorrect) {
      return res
        .status(401)
        .json({ success: false, message: 'Invalid password!' });
    }

    const token = user.generateJwtToken();

    if (!token) {
      return res.status(500).json({
        success: false,
        message: 'Failed to generate json-web-token!',
      });
    }

    user.password = 'not sent due to security reasons!';

    return res
      .status(200)
      .cookie('token', token, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
      })
      .json({
        success: true,
        data: user,
        token,
        message: 'User login successfull!',
      });
  } catch (error) {
    console.log('Login error!', error);
    res
      .status(500)
      .json({ message: error.message || 'Internal server error!' });
  }
};

export const logout = async (req, res) => {
  try {
    return res
      .clearCookie('token', { httpOnly: true })
      .json({ success: true, data: {}, message: 'User logout successfully!' });
  } catch (error) {
    console.log('Logout error!', error);
    return res
      .status(500)
      .json({ success: false, message: 'Failed to logout!' });
  }
};
