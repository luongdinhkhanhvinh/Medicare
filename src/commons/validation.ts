import * as yup from 'yup';

export const passwordSchema = yup
  .string()
  .label('Password')
  .matches(/.*[A-Z]/, ({ label }) => `${label} must contain at least an upper case character`)
  .matches(/.*[a-z]/, ({ label }) => `${label} must contain at least a lower case character`)
  .matches(/.*\d/, ({ label }) => `${label} must contain at least a number`)
  .matches(/.*[-_!@#$%^&*.,?]/, ({ label }) => `${label} must contain at least a special character`)
  .min(8, ({ label }) => `${label} must contain at least 8 characters`)
  .max(20, ({ label }) => `${label} length must not exceed 20 characters`)
  .required(({ label }) => `${label} is required`);

export const confirmPasswordSchema = yup
  .string()
  .oneOf([yup.ref('password')], 'Passwords do not match')
  .required('Confirm password is required');

export const emailSchema = yup
  .string()
  .email('Invalid email address')
  .required('Email is required');
