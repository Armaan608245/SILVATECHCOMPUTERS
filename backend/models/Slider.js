const mongoose = require("mongoose");

const sliderSchema = new mongoose.Schema({
  url: String,
  type: String
});

module.exports = mongoose.model("Slider", sliderSchema);