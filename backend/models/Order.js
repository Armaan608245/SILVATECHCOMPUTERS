const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customerName: String,
  phone: String,
  address: String,
  products: Array,
  total: Number,

  status: { type: String, default: "Pending" },
  otp: Number,

  deliveryBoy: String
});

module.exports = mongoose.model("Order", orderSchema);