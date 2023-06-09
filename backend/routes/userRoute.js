import { Router } from "express";
import {
  checkAuth,
  loadProfile,
  logOut,
  profileUpdate,
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

// @desc user check auth
// @route GET /api/user/check-auth
// @access Public

userRouter.get("/check-auth", checkAuth);

// @desc user log out
// @route POST /api/user/logout
// @access Public

userRouter.post("/logout", logOut);

// @desc user update profile
// @route PATCH /api/user/update-profile
// @access Private

userRouter.patch("/update-profile", isAuthUser, profileUpdate);

export default userRouter;
