const catchAsync = require("../utils/catchAsync");
const AppError = require("../middleware/myError");
const Category = require("../models/Category");
const SubCategory = require("../models/SubCategory");

exports.getSubCategory = catchAsync(async (req, res) => {
  try {
    const findSubCategory = await SubCategory.find().populate("Category");
    if (findSubCategory) {
      res.json({
        success: true,
        result: findSubCategory,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

exports.createSubCategory = catchAsync(async (req, res, next) => {
  try {
    const { SubCategoryName, SubCategoryDescription, categoryId } = req.body;
    const { avatar } = req.file;
    const subcategory_image = new SubCategory({
      avatar: avatar[0].path,
      SubCategoryName: SubCategoryName,
      SubCategoryDescription: SubCategoryDescription,
      categoryId: categoryId,
    });
    const subcategory = await subcategory_image.save();
    if (subcategory) {
      const findsubcategory = await Category.findByIdAndUpdate(
        subcategory.categoryId,
        {
          $addToSet: { subcategory: subcategory._id },
        }
      );
      if (findsubcategory) {
        res.status(200).json({
          success: true,
          data: subcategory,
        });
      }
    }
  } catch (err) {
    next(err);
    console.log(err);
  }
});

exports.delete = catchAsync(async (req, res, next) => {
  const subcategory = await SubCategory.findById(req.params.id);
  if (!subcategory) {
    throw new AppError(req.params.id + "Id тай категори байхгүй байна", 400);
  }
  const delsubcategory = await SubCategory.findByIdAndRemove(req.params.id);
  if (delsubcategory) {
    res.status(200).json({
      success: true,
      data: subcategory,
    });
  }
});
