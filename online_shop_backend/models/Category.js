const mongoose = require("mongoose");
const { transliterate, slugify } = require("transliteration");

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Ангилал нэрийг оруулна уу"],
      unique: true,
      trim: true,
      maxlength: [50, "Ангилал нэрний урт дээд тал нь 50 тэмдэгт байх ёстой."],
    },
    slug: String,
    chosen: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      required: [true, "Ангилал тайлбарыг заавал оруулах ёстой."],
      maxlength: [
        500,
        "Ангилал тайлбарын урт дээд тал нь 500 тэмдэгт байх ёстой.",
      ],
    },
    avatar: { type: String },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

module.exports = mongoose.model("Category", CategorySchema);
