import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { Restaurant } from '../models/restaurant.model.js';
import { validateRegisterData } from '../validation/restaurant.validation.js';
import { uploadOnCloudinary } from '../utils/cloudinary.js';

export const registerRestaurant = asyncHandler(async (req, res) => {
  try {
    if (req.body.cuisine && req.body.openingHours) {
      req.body.cuisine = JSON.parse(req.body.cuisine);
      req.body.openingHours = JSON.parse(req.body.openingHours);
    }
  } catch (err) {
    throw new ApiError(500, 'Error while parsing cuisine and opening hours');
  }

  validateRegisterData(req);
  const { name, description, contact, cuisine, openingHours } = req.body;

  const existingRestaurant = await Restaurant.findOne({ name, contact });

  if (existingRestaurant) {
    throw new ApiError(
      400,
      'Restaurant with given name and contact already exists.'
    );
  }

  const resAvatarLocalPath = req.file?.path;

  if (!registerRestaurant) {
    throw new ApiError(400, 'Empty restaurant images');
  }

  const uploadedResImages = await uploadOnCloudinary(resAvatarLocalPath);

  if (!uploadedResImages) {
    throw new ApiError(500, 'Error while uploading image.');
  }

  const restaurant = await Restaurant.create({
    name,
    description,
    contact,
    cuisine,
    openingHours,
    restaurantImage: uploadedResImages?.url ?? '',
  });

  return res
    .status(201)
    .json(new ApiResponse(200, restaurant, 'Restaurant created successfully!'));
});

export const updateRestaurant = asyncHandler(async (req, res) => {
  // select fileds which are allowed to update and which are not
  // allowed -> name, description, contact, cuisine,
});
