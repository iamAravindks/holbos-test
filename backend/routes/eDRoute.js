import { Router } from "express";
import { loadData } from "../controllers/eDController.js";

const eDRouter = Router();

// @desc Get all the engineering data
// @route GET /api/ed/load-ed
// @access Public

eDRouter.get("/load-ed", loadData);

export default eDRouter;
