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

exports.createBrand = catchAsync(async (req, res, next) => {
  try {
    const { brand_name } = req.body;
    const { avatar } = req.files;
    const brand_image = new Brand({
      avatar: avatar[0].path,
      brand_name: brand_name,
    });
    const brand = await brand_image.save();
    res.status(200).json({
      success: true,
      data: brand,
    });
  } catch (err) {
    next(err);
    console.log(err);
  }
});

exports.editBrand = catchAsync(async (req, res) => {
  try {
    const { id } = req.params;
    const { brand_name, newAvatar, avatarOld } = req.body;
    const brand = await Brand.findById(id);
    if (brand_name) {
      brand.brand_name;
    }
    if (newAvatar) {
      brand.avatar = photo[0].path;
    } else {
      brand.avatar = avatarOld;
    }
    const saveBrand_image = await Brand.save();
    if (saveBrand_image) {
      res.json({
        success: true,
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      success: true,
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
