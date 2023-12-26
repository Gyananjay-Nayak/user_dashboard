export const validateEmail = (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value) ? '' : 'Invalid email address';
};

export const validatePhoneNumber = (value) => {
  const phoneRegex = /^\d{10}$/; // Simple validation for 10-digit phone number
  return phoneRegex.test(value) ? '' : 'Invalid phone number';
};
