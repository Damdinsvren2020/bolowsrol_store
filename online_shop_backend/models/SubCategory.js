const mongoose = require("mongoose");

const SubCategorySchema = new mongoose.Schema(
  {
    SubCategoryName: {
      type: String,
      required: [true, "Дэд ангилал нэрийг оруулна уу"],
      unique: true,
      trim: true,
    },
    SubCategoryDescription: {
      type: String,
      required: [true, "Дэд ангилал тайлбарыг заавал оруулах ёстой."],
      maxlength: [
        500,
        "Дэд ангилал тайлбарын урт дээд тал нь 500 тэмдэгт байх ёстой.",
      ],
    },
    avatar: { type: String },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

module.exports = mongoose.model("SubCategory", SubCategorySchema);
