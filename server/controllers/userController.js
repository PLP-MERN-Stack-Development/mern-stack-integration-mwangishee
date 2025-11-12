import User from "../models/User.js";
import bcrypt from "bcryptjs";

// Test Controller
export const testUser = (req, res) => {
  res.json({ message: "User API working ✅" });
};

// Create New User (POST)
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword
    });

    res.json({ message: "User created ✅", user: newUser });
  } catch (err) {
    res.json({ error: err.message });
  }
};

// Get All Users (GET)
export const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};
