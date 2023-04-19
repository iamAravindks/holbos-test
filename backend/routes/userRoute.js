import { Router } from "express";
import {
  loadProfile,
  userLogin,
  userSignUp,
} from "../controllers/userController.js";
import { isAuthUser } from "../middleware/middleware.js";

const userRouter = Router();

// @desc user sign-up
// @route POST /api/user/signup
// @access Public

userRouter.post("/signup", userSignUp);

// @desc user login
// @route POST /api/user/login
// @access Public

userRouter.post("/login", userLogin);

// @desc user load profile
// @route POST /api/user/profile
// @access Public

userRouter.get("/profile", isAuthUser, loadProfile);

export default userRouter;
