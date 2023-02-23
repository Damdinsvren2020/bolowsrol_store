const Brand = require("../models/Brand");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../middleware/myError");

exports.getBrand = catchAsync(async (req, res) => {
  const brand = await Brand.find();
  res.status(200).json({
    success: true,
    data: brand,
  });
});

exports.createBrand = async (req, res, next) => {
  try {
    const { name, description } = req.body;
    const { avatar } = req.files;
    const Brand_image = new Brand({
      avatar: avatar[0].path,
      name: name,
      description: description,
    });
    const brand = await Brand_image.save();
    res.status(200).json({
      success: true,
      data: brand,
    });
  } catch (err) {
    next(err);
    console.log(err);
  }
};

exports.editBrand = catchAsync(async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, newavatar, avatarOld } = req.body;
    const { avatar } = req.files;
    const banner_images = await Brand.findByIdAndUpdate(id);
    if (name) {
      banner_images.name = name;
    }
    if (newavatar) {
      banner_images.avatar = avatar[0].path;
    } else {
      banner_images.avatar = avatarOld;
    }
    if (description) {
      banner_images.description = description;
    }
    const saveBanner_images = await banner_images.save();

    if (saveBanner_images) {
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

exports.deleteBrand = catchAsync(async (req, res) => {
  const { id } = req.params;
  const brand = await Brand.findByIdAndDelete(id);
  if (!brand) {
    return next(new AppError("fails", 400));
  }
  res.status(200).json({
    success: true,
    data: brand,
  });
});
