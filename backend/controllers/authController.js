import generateToken from '../utils/generateTokens.js'; // Import the token generation function
import User from '../models/userModel.js'; // Assuming you're using the User model

// Sample login function
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Check if the user exists (assuming you have a User model with a 'findByEmail' method)
  const user = await User.findOne({ email });

  if (!user || !(await user.matchPassword(password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Generate a token after successful login
  const token = generateToken(user._id);

  // Send back the token in the response (you can also send user details)
  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    token, // Send the generated token back
  });
};

export { loginUser };
