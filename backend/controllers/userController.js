import expressAsyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/utils.js";

// @desc User Signup
// @access Public
export const userSignUp = expressAsyncHandler(async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(403)
        .json({ message: "Sufficient values are not provided" });
    }

    const user = await User.create({
      name,
      email,
      password,
    });
    if (user) {
      const maxAge = 3 * 24 * 60 * 60;
      const token = generateToken(user._id);
      res.cookie("Holbos_Secure_Session_ID", token, {
        httpOnly: true,
        maxAge: maxAge * 1000,
      });

      res.cookie("Holbos_user_Status", user._id, {
        maxAge: maxAge * 1000,
        httpOnly: true,
      });
      return res.status(201).json({
        data: user.toJSON(),
      });
    }
    throw new Error();
  } catch (error) {
    throw new Error(error.message ? error.message : "Internal server error");
  }
});

// @desc User Signup
// @access Public

export const userLogin = expressAsyncHandler(async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(403)
        .json({ message: "Sufficient values are not provided" });
    }

    const user = await User.findOne({
      name,
      email,
    });

    if (user && (await user.matchPassword(password))) {
      const maxAge = 3 * 24 * 60 * 60;
      const token = generateToken(user._id);
      res.cookie("Holbos_Secure_Session_ID", token, {
        httpOnly: true,
        maxAge: maxAge * 1000,
      });

      res.cookie("Holbos_user_Status", user._id, {
        maxAge: maxAge * 1000,
      });
      return res.status(201).json({
        data: user.toJSON(),
      });
    } else {
      res.status(401);
      throw new Error("invalid password or email");
    }
  } catch (error) {
    throw new Error(error.message ? error.message : "Internal server error");
  }
});
