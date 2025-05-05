import jwt from 'jsonwebtoken';

// Function to generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d', // Set token expiration as needed
  });
};

export default generateToken;
