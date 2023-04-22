import { Router } from "express";
import { loadData, loadSkills } from "../controllers/eDController.js";
import { isAuthUser } from "../middleware/middleware.js";

const eDRouter = Router();

// @desc Get all the engineering data
// @route GET /api/ed/load-ed
// @access Public

eDRouter.get("/load-ed", isAuthUser, loadData);

// @desc Get all the skills
// @route GET /api/ed/load-skills
// @access Public

eDRouter.get("/load-skills", isAuthUser, loadSkills);

export default eDRouter;
