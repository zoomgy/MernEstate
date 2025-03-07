import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

const signUpContoller = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    console.log("User Created Successfully");
    res.status(201).json({
      status: "User Created Successfully",
    });
  } catch (error) {
    next(error);
  }
};

export { signUpContoller };
