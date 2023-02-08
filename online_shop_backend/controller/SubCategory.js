const SubCategory = require("../models/SubCategory");
const Category = require("../models/Category");
const AppError = require("../utils/Error");
const catchAsync = require("../utils/catchAsync");

exports.getSubCategory = catchAsync(async (req, res) => {
  const SubCategorys = await SubCategory.find();
  res.status(200).json({
    message: "success",
    result: SubCategorys,
    count: SubCategorys.length,
  });
});

exports.createSubCategory = catchAsync(async (req, res, next) => {
  const category = await Category.findById(req.body);
  if (!category) {
    throw new AppError(req.body.Category + " ID-тэй ангилал байхгүй!", 400);
  }
  const subCategory = await SubCategory.create(req.body);
  if (subCategory) {
    const findCategory = await Category.findByIdAndUpdate(category._id, {
      $addToSet: { subCategory: subCategory._id },
    });
  }
  res.status(200).json({
    success: true,
    data: category,
  });
});

exports.updateCategory = catchAsync(async (req, res, next) => {
  const { name, content } = req.body;
  const findSubCategory = await SubCategory.findById(req.params.id);
  if (name) {
    findSubCategory.name = name;
  }
  if (content) {
    findSubCategory.content = content;
  }
  const saveSub = await findSubCategory.save();
  if (saveSub) {
    res.json({
      success: true,
    });
  }
});

exports.deleteSubCategory = catchAsync(async (req, res, next) => {
  const subcategory = SubCategory.findByIdAndRemove(req.params.id);
  if (!category) {
    throw new AppError(req.body.Category + " ID-тэй ангилал байхгүй!", 400);
  }
  res.status(200).json({
    success: true,
    data: subcategory,
  });
});
