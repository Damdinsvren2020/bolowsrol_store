const mongoose = require("mongoose");
const SubCategorySchema = new mongoose.Schema({
  name: String,
  avatar: String,
  content: String,
  category: { ref: "Category" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("SubCategory", SubCategorySchema);
