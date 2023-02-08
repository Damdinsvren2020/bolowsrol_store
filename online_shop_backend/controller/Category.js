const Category = require("../models/Category");
const AppError = require("../utils/Error");
const catchAsync = require("../utils/catchAsync");

exports.getCategory = catchAsync(async (req, res, next) => {
  const category = await Category.find();
  res.status(200).json({
    success: true,
    data: category,
  });
});

exports.createCategory = catchAsync(async (req, res, next) => {
  try {
    const { name, description, slug } = req.body;
    const { avatar } = req.files;
    const category_image = new Category({
      avatar: avatar[0].path,
      name: name,
      description: description,
      slug: slug,
    });
    const category = await category_image.save();
    res.status(200).json({
      success: true,
      data: category,
    });
  } catch (err) {
    console.log(err);
  }
});

exports.editCategory = catchAsync(async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, description, slug, newAvatar, avatarOld } = req.body;
    const category = await Category.findById(id);
    if (name) {
      category.name;
    }
    if (description) {
      category.description;
    }
    if (slug) {
      category.slug;
    }
    if (newAvatar) {
      category.avatar = photo[0].path;
    } else {
      category.avatar = avatarOld;
    }
    const saveCategory_image = await Category.save();
    if (saveCategory_image) {
      res.json({
        success: true,
      });
    }
  } catch (err) {
    console.log(err);
    res.json({
      success: true,
    });
  }
});

exports.deleteCategory = catchAsync(async (req, res, next) => {
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
