const Admin = require("../models/Admin");
const EshopError = require("../utils/Error");
const catchAsync = require("../utils/catchAsync");
const bcrypt = require("bcryptjs");

exports.register = catchAsync(async (req, res, next) => {
  try {
    const { fullname, email, password, permission } = req.body;
    const { avatar } = req.files;
    const emailExists = await Admin.findOne({ email: email });
    if (emailExists) {
      res.json({
        success: false,
        result: "Email Exists",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    if (hashedPassword) {
      const admin = new Admin({
        fullname: fullname,
        email: email,
        password: hashedPassword,
        avatar: avatar ? avatar[0].path : "",
        erh: permission,
      });
      const result = await admin.save();
      if (result) {
        res.json({
          success: true,
        });
      }
    }
  } catch (err) {
    res.json({
      success: false,
      result: error.message,
    });
  }
});

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  console.log("newtreh ner", req.body);

  if (!email || !password) {
    return res.json({
      success: false,
      result: "Имэйл болон нууц үгээ оруулна уу!",
    });
  }

  const user = await Admin.findOne({ email }).select("+password");

  if (!user) {
    return res.json({ success: false, result: "Хэрэглэгч олдсонгүй !" });
  }

  const ok = await user.checkPassword(password);

  if (!ok) {
    return res.json({ success: false, result: "Нууц үг буруу байна !" });
  }

  if (ok) {
    res.status(200).json({
      success: true,
      token: user.getJsonWebToken(),
      user: user,
    });
  }
};

exports.log_out = catchAsync(async (req, res, next) => {
  const { _id } = req.user;
  const admin = await Admin.findByIdAndUpdate(_id, {
    active: false,
  });
  if (admin) {
    res.json({
      success: true,
    });
  }
});

// exports.auth = catchAsync(async (req, res, next) => {
//   res.status(200).json({
//     message: "success",
//     result: {
//       fullname: req.user.fullname,
//       email: req.user.email,
//       avatar: req.user.avatar,
//       erh: req.user.erh,
//       id: req.user._id,
//     },
//   });
// });

exports.auth = catchAsync(async (req, res, next) => {
  if (!req.headers.authorization) {
    throw new EshopError(
      "Энэ үйлдлийг хийхэд таны эрх хүрэхгүй байна.Та эхлээд login хийнэ үү",
      401
    );
  }
  const token = req.headers.authorization.split("")[1];
  if (!token) {
    throw new EshopError("Токен байхгүй байна.", 400);
  }
  try {
    const verify = jwt.verify(token, "dijsdhfshfjhsbdjfhbsdjhbfjsdhbjhb");
    const findUser = await Admin.findById(verify.id).select("-password");
    if (findUser) {
      res.json({
        success: true,
        user: findUser,
        erh: findUser.erh,
      });
    }
  } catch {
    console.log(err.message, "xaxa");
  }
  {
    console.log(err);
  }
});

exports.admins = catchAsync(async (req, res, next) => {
  const allAdmins = await Admin.find();
  res.status(200).json({
    message: "success",
    result: allAdmins,
  });
});

exports.delete = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const deletedUser = await Admin.findByIdAndDelete(id);
  if (!deletedUser) {
    return next(new EshopError("fails", 400));
  }
  res.status(200).json({
    message: "success",
    success: true,
  });
});
