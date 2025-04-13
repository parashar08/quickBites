import { z } from 'zod';

const userRole = ['customer', 'restaurant-owner', 'delivery-boy', 'admin'];

export const signUpSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: 'FullName must be 3 characters long' })
    .max(60, { message: 'FullName cannot exceed 60 characters long' })
    .trim(),

  email: z
    .string()
    .email({ message: 'Invalid email address' })
    .min(3, { message: 'Email must be 3 characters long' })
    .max(50, { message: 'Email cannot exceed 60 characters' })
    .trim()
    .toLowerCase(),

  role: z.enum(userRole).default('customer'),

  phoneNumber: z
    .string()
    .length(10, { message: 'Phone number must be exactly 10 digits' })
    .regex(/^\d+$/, { message: 'Phone number must contain only digits' })
    .transform((val) => parseInt(val, 10)),

  password: z
    .string()
    .min(6)
    .max(100)
    .regex(/[A-Z]/, { message: 'Must contain at least one uppercase letter' })
    .regex(/[a-z]/, { message: 'Must contain at least one lowercase letter' })
    .regex(/[0-9]/, { message: 'Must contain at least one number' }),
});
