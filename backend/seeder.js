import connectDB from "./config/db.js";
import { engineeringDisciplineData } from "./data.js";
import EngineeringDiscipline from "./models/engineeringDisciplineSchema.js";

const importData = async () => {
  try {
    await connectDB();
    const uploadDataDocs = await EngineeringDiscipline.insertMany(
      engineeringDisciplineData
    );
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
    console.log("deletion success");
  } catch (error) {
    console.log(error);
  } finally {
    process.exit();
  }
};

if (process.argv[2] === "-d") destroyData();
else importData();
