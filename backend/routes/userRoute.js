import { Router } from "express";
import { userLogin, userSignUp } from "../controllers/userController.js";

const userRouter = Router();

// @desc user sign-up
// @route POST /api/user/signup
// @access Public

userRouter.post("/signup", userSignUp);

// @desc user login
// @route POST /api/user/login
// @access Public

userRouter.post("/login", userLogin);

export default userRouter;
