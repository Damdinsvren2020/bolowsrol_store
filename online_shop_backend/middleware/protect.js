const EshopError = require("./myError");
const catchAsync = require("../utils/catchAsync");
const jwt = require("jsonwebtoken");

exports.protect = catchAsync(async (req, res, next) => {
  if (!req.headers.authorization) {
    throw new EshopError(
      "Энэ үйлдлийг хийхэд таны эрх хүрэхгүй байна. Та эхлээд логин хийнэ үү. Authorization header-ээр токеноо дамжуулна уу.",
      401
    );
  }
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    throw new EshopError("Токен байхгүй байна.", 400);
  }
  const tokenObj = jwt.verify(token, process.env.JWT_SECRET);
  console.log(tokenObj);
  req.userId = tokenObj.id;
  req.userErh = tokenObj.erh;
});

exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.userErh)) {
      throw new EshopError(
        "Таны эрх [" + req.userErh + "] энэ үйлдлийг гүйцэтгэхэд хүрэлцэхгүй!",
        403
      );
    }
    next();
  };
};
