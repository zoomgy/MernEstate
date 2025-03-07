import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

const signUpContoller = async (req, res) => {
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
    res.status(401).json({
      error: "Username or Email is Already Taken",
    });
    return;
  }
};

export { signUpContoller };
