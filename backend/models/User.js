const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },

  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  city: { type: String, required: true },
  address: { type: String, required: true },
  pincode: { type: String, required: true }
}, { timestamps: true }); // 🔥 ADD THIS

module.exports = mongoose.model("User", userSchema);