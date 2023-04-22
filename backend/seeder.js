import connectDB from "./config/db.js";
import { engineeringDisciplineData, skillData } from "./data.js";
import Skills from "./models/SkillsModel.js";
import EngineeringDiscipline from "./models/engineeringDisciplineSchema.js";

const importData = async () => {
  try {
    await connectDB();
    const uploadDataDocs = await EngineeringDiscipline.insertMany(
      engineeringDisciplineData
    );
    const uploadSkills = await Skills.insertMany(skillData);
    console.log("Data uploaded successfully!");
  } catch (error) {
    console.log(error);
  } finally {
    process.exit();
  }
};

const destroyData = async () => {
  try {
    await connectDB();
    await EngineeringDiscipline.deleteMany({});
    await Skills.deleteMany({});
    console.log("deletion success");
  } catch (error) {
    console.log(error);
  } finally {
    process.exit();
  }
};

if (process.argv[2] === "-d") destroyData();
else importData();
