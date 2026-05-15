const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true
  },

  email: {                 // ✅ ADD THIS
    type: String,
    required: true
  },

  phone: {
    type: String,
    required: true
  },

  address: {              // ✅ ADD THIS
    type: String,
    required: true
  },

  type: {
    type: String,
    required: true
  },

  status: {
    type: String,
    default: "Not Ordered"
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model("Activity", activitySchema);