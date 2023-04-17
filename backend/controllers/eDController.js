import expressAsyncHandler from "express-async-handler";
import EngineeringDiscipline from "../models/engineeringDisciplineSchema.js";

export const loadData = expressAsyncHandler(async (req, res) => {
  try {
    const data = await EngineeringDiscipline.find({});
    if (data) res.status(200).json({ data });
    else {
      res.status(500);
      throw new Error("Something went wrong");
    }
  } catch (error) {
    console.log(error);
    throw new Error(error.message ? error.message : "Internal server error");
  }
});
