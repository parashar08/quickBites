import validator from 'validator';

export const validateRegisterData = (req) => {
  const {
    name,
    contact,
    cuisine,
    rating,
    deliveryRating,
    isOpen,
    openingHours,
  } = req.body;

  if (!name || name.trim().lenght < 3) {
    throw new Error('Restaurant name must be at least 2 characters long.');
  }

  if (!contact || !validator.isMobilePhone(contact, 'any')) {
    throw new Error('Invalid contact number.');
  }

  if (cuisine) {
    if (!Array.isArray(cuisine)) {
      throw new Error('Cuisine must be an array of strings.');
    }
    for (let item of cuisine) {
      if (typeof item !== 'string' || item.trim() === '') {
        throw new Error('Each cuisine must be a non-empty string.');
      }
    }
  } else {
    throw new Error('Empty cuisine.');
  }

  if (rating !== undefined || deliveryRating !== undefined) {
    throw new Error('Updating ratings manually is not allowed.');
  }

  if (!isOpen || typeof isOpen !== Boolean) {
    throw new Error('Invalid isOpen value');
  }

  if (openingHours) {
    const { open, close } = openingHours;
    const timeRegex = /^(0[1-9]|1[0-2]):[0-5][0-9] (AM|PM)$/;

    if (open && !timeRegex.test(open)) {
      throw new Error('Invalid opening time format (Expected HH:MM AM/PM).');
    }
    if (close && !timeRegex.test(close)) {
      throw new Error('Invalid closing time format (Expected HH:MM AM/PM).');
    }
  } else {
    throw new Error('Empty opening hours');
  }
};
