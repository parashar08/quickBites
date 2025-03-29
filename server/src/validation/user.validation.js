import validator from 'validator';

export const validateSignupData = (req) => {
  const { fullName, email, phoneNumber, password, role } = req.body;
  if (!fullName) {
    throw new Error('name is empty');
  } else if (!validator.isEmail(email)) {
    throw new Error('enter valid email');
  } else if (!validator.isStrongPassword(password)) {
    throw new Error('enter strong password');
  } else if (!['customer', 'owner', 'delivery', 'admin'].includes(role)) {
    throw new Error('enter valid role!');
  } else if (!validator.isMobilePhone(phoneNumber, 'any')) {
    throw new Error('enter valid phone number');
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

export const validateUserUpdateInput = (req) => {
  const { fullName, email, phoneNumber, password, role } = req.body;

  if (password || role) {
    throw new Error('Updation of password or role is denied.');
  }
  if (!fullName) {
    throw new Error('Name field is empty.');
  }
  if (!validator.isEmail(email)) {
    throw new Error('Invalid email.');
  }
  if (!validator.isMobilePhone(phoneNumber, 'any')) {
    throw new Error('Invalid phone number.');
  }
};
