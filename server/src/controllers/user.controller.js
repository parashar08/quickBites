import { User } from '../models/user.model.js';
import { signUpSchema } from '../validations/user.validation.js';

export const signup = async (req, res) => {
  try {
    const validationResult = signUpSchema.safeParse(req.body);

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
