import validator from 'validator';

export const validateSignupData = (req) => {
  const { fullName, email, password, role } = req.body;
  if (!fullName) {
    throw new Error('name is empty');
  } else if (!validator.isEmail(email)) {
    throw new Error('enter valid email');
  } else if (!validator.isStrongPassword(password)) {
    throw new Error('enter strong password');
  } else if (!['customer', 'owner', 'delivery', 'admin'].includes(role)) {
    throw new Error('enter valid role!');
  }
};

export const validateLoginData = (req) => {
  const { email, password } = req.body;
  if (!validator.isEmail(email)) {
    throw new Error('invalid email type!');
  } else if (!password) {
    throw new Error('empty password');
  }
};
