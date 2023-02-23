const Category = require("../models/Category");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../middleware/myError");

exports.getCategory = catchAsync(async (req, res) => {
  const category = await Category.find();
  res.status(200).json({
    success: true,
    data: category,
  });
});

exports.createCategory = catchAsync(async (req, res, next) => {
  try {
    const { name, description } = req.body;
    const { avatar } = req.files;
    const Category_image = new Category({
      avatar: avatar[0].path,
      name: name,
      description: description,
    });
    const category = await Category_image.save();
    res.status(200).json({
      success: true,
      data: category,
    });
  } catch (err) {
    next(err);
    console.log(err);
  }
});

exports.editCategory = catchAsync(async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, newavatar, avatarOld } = req.body;
    const { avatar } = req.files;
    const category_images = await Category.findByIdAndUpdate(id);
    if (name) {
      category_images.name = name;
    }
    if (description) {
      category_images.description = description;
    }
    if (newavatar) {
      category_images.avatar = avatar[0].path;
    } else {
      category_images.avatar = avatarOld;
    }
    const saveCategory_images = await category_images.save();
    if (saveCategory_images) {
      res.json({
        success: true,
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
    });
  }
});

exports.deleteCategory = catchAsync(async (req, res) => {
  const { id } = req.params;
  const category = await Category.findByIdAndDelete(id);
  if (!category) {
    return next(new AppError("fails", 400));
  }
  res.status(200).json({
    success: true,
    data: category,
  });
});
