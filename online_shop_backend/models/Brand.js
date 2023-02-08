const mongoose = require("mongoose");

const BrandSchema = new mongoose.Schema({
  brand_name: { String },
  avatar: { String },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Brand", BrandSchema);
