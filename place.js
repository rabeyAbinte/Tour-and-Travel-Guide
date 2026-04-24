const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  name: String,
  info: String,
  cost: String,
  images: [String]
});

module.exports = mongoose.model("Place", placeSchema);
