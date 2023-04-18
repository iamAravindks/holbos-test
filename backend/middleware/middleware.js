import config from "../config.js";

import expressAsyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
const notFound = (req, res, next) => {
  const err = new Error(`Error 404 : ${req.method} ${req.url} not found`);
  res.status(404);
  next(err);
};

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

const isAuthUser = expressAsyncHandler(async (req, res, next) => {
  const token = req.cookies["Holbos_Secure_Session_ID"];

  if (token) {
    try {
      const decodedObj = jwt.verify(token, config.JWT_SECRET);
      const user = await User.findById(decodedObj.id).select("-password");
      if (user) {
        req.user = user;
        next();
      } else {
        res.status(404);
        throw new Error("No user found. User credentials may have changed.");
      }
    } catch (error) {
      res.status(401);
      if (error.name === "TokenExpiredError") {
        throw new Error("Your session has expired. Please log in again.");
      } else {
        throw new Error("Authentication failed. Please log in again.");
      }
    }
  } else {
    res.status(401);
    throw new Error(
      "You are not authorized to access this resource. Please log in."
    );
  }
});

export { notFound, errorHandler, isAuthUser };
