import mongoose from "mongoose";
import bcrypt from "bcrypt";
import isEmail from "validator/lib/isEmail.js";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true,
    validate: isEmail,
  },
  password: {
    type: String,
    required: true,
  },
  skillSets: [String],
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
userSchema.pre("save", async function (next) {
  // if not password modified (if an existed user updates the email and name)
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  if (userObject.passwordResetToken) delete userObject.passwordResetToken;
  if (userObject.passwordResetExpires) delete userObject.passwordResetExpires;

  return userObject;
};

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
