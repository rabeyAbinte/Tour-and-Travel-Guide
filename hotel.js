const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  name: String,
  rent: String,
  image: String
});

module.exports = mongoose.model("Hotel", hotelSchema);
