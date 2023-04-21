import mongoose, { Schema, model } from "mongoose";

const productSchema = new Schema({
  productName: {
    type: String,
    required: true,
  },
  productImage: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
});

const workCultureSchema = new Schema({
  culture: {
    type: String,
    required: true,
  },
  importance: {
    type: String,
  },
});

const detailSchema = new Schema({
  companyName: {
    type: String,
    required: true,
  },
  companyDescription: {
    type: String,
    required: true,
  },
  companyImage: {
    type: String,
    required: true,
  },
  products: [productSchema],
  peopleSoftSkills: [String],
  workCulture: [workCultureSchema],
  skillSets: [String],
});

const engineeringDisciplineSchema = new Schema({
  discipline: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  details: [detailSchema],
});

const EngineeringDiscipline =
  mongoose.models.EngineeringDiscipline ||
  model("EngineeringDiscipline", engineeringDisciplineSchema);

export default EngineeringDiscipline;
