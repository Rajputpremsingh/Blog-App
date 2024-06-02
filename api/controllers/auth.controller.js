import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res,next) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    // res.status(400).json({ message: "All fields are required" });
    next(errorHandler(400,'All fields are required'))
  }
  try {
    const hashPAssword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashPAssword });
    await newUser.save();
    res.json({ message: "Signup Successful" });
  } catch (error) {
    // res.status(500).json({ message: error.message });
    next(error)
  }
};
