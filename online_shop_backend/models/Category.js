const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: String,
  description: String,
  slug: String,
  chosen: { type: Boolean, default: false },
  avatar: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Category", CategorySchema);
