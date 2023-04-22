import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  skills: [
    {
      type: String,
    },
  ],
});

const Skills = mongoose.models.Skills || mongoose.model("Skills", skillSchema);

export default Skills;
