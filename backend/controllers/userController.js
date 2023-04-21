import expressAsyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/utils.js";

// @desc User Signup
// @access Public
export const userSignUp = expressAsyncHandler(async (req, res) => {
  try {
    const { name, email, password, discipline } = req.body;

    if (!name || !email || !password || !discipline) {
      return res
        .status(403)
        .json({ message: "Sufficient values are not provided" });
    }

    const user = await User.create({
      name,
      email,
      password,
      discipline,
    });
    if (user) {
      const maxAge = 3 * 24 * 60 * 60;
      const token = generateToken(user._id);
      res.cookie("Holbos_Secure_Session_ID", token, {
        httpOnly: true,
        maxAge: maxAge * 1000,
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
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(403)
        .json({ message: "Sufficient values are not provided" });
    }

    const user = await User.findOne({
      email,
    });

    if (user && (await user.matchPassword(password))) {
      const maxAge = 3 * 24 * 60 * 60;
      const token = generateToken(user._id);
      res.cookie("Holbos_Secure_Session_ID", token, {
        httpOnly: true,
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

// @desc Get profile
// @access Private

export const loadProfile = expressAsyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    res.status(200).json({
      data: user,
    });
  } catch (error) {
    throw new Error(error.message ? error.message : "Internal server error");
  }
});

// @desc check auth
//@access public

export const checkAuth = expressAsyncHandler(async (req, res) => {
  try {
    const cookie = req.cookies["Holbos_Secure_Session_ID"];
    if (cookie) {
      return res.status(200).json({ session_id: true });
    } else {
      return res.status(200).json({ session_id: false });
    }
  } catch (error) {
    throw new Error(error.message ? error.message : "Internal server error");
  }
});

//  @desc log out

export const logOut = expressAsyncHandler(async (req, res) => {
  try {
    res.clearCookie("Holbos_Secure_Session_ID", { httpOnly: true });
    res.status(200).json({ message: "Log out successfully" });
  } catch (error) {
    throw new Error(error.message ? error.message : "Internal server error");
  }
});

export const profileUpdate = expressAsyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");

    if (user) {
      const {
        name = user.name,
        email = user.email,
        skillSets = [],
        discipline = user.discipline,
        password,
      } = req.body;
      const updatedUser = await User.findOneAndUpdate(
        { _id: req.user._id },
        {
          $set: { name, email, skillSets, discipline },
        },
        { new: true } // return the updated document
      );

      if (updatedUser && password) {
        updatedUser.password = password;
        await updatedUser.save();
      }

      if (updatedUser) {
        return res.status(200).json({
          data: updatedUser.toJSON(),
        });
      }
    }
  } catch (error) {
    throw new Error(error.message ? error.message : "Internal server error");
  }
});
