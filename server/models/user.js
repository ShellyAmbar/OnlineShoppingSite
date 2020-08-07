const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxLength: 50,
  },
  lastName: {
    type: String,
    maxLength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    minLength: 6,
  },
  role: {
    type: Number,
    default: 0,
  },
  token: {
    type: String,
  },
  tokenNumber: {
    type: Number,
  },
});
const User = mongoose.model("User", userSchema);
module.exports(User);
