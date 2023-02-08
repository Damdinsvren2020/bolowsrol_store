const mongoose = require("mongoose");

const Big_Category_Schema = new mongoose.Schema({
  name: { String },
  order: { type: Number },
  category: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("big_category", Big_Category_Schema);
