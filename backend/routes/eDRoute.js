import { Router } from "express";
import { loadData } from "../controllers/eDController.js";
import { isAuthUser } from "../middleware/middleware.js";

const eDRouter = Router();

// @desc Get all the engineering data
// @route GET /api/ed/load-ed
// @access Public

eDRouter.get("/load-ed", isAuthUser, loadData);

export default eDRouter;
