const User = require("../models/User");
const EshopError = require("../utils/Error");
const jwt = require("jsonwebtoken");
exports.register = async (req, res, next) => {
  const user = await User.create(req.body);
  const token = user.getJsonWebToken();
  res.status(200).json({
    success: true,
    token,
    user: user,
  });
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  console.log("user", req.body);
  if (!email || !password) {
    return res.json({
      success: false,
      result: "Имэйл болон нууц үгээ оруулна уу!",
    });
  }

  const user = await User.findOne({ email }).select("+password");
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

exports.getUsers = async (req, res, next) => {
  const users = await User.find(req.query);
  res.status(200).json({
    success: true,
    data: users,
    users,
  });
};

exports.singleUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const findSingleUser = await User.findById(id);
    if (findSingleUser) {
      res.json({
        success: true,
        result: findSingleUser,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.auth = async (req, res, next) => {
  if (!req.headers.authorization) {
    throw new EshopError(
      "Энэ үйлдлийг хийхэд таны эрх хүрэхгүй байна. Та эхлээд логин хийнэ үү",
      401
    );
  }
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    throw new EshopError("Токен байхгүй байна.", 400);
  }
  try {
    const verify = jwt.verify(token, "dijsdhfshfjhsbdjfhbsdjhbfjsdhbjhb");
    const findUser = await User.findById(verify.id).select("-password");
    if (findUser) {
      res.json({
        success: true,
        user: findUser,
        role: findUser.role,
      });
    } else {
      res.json({
        success: true,
      });
    }
  } catch (err) {
    console.error(err.message);
  }
};

exports.getUsers = async (req, res, next) => {
  const users = await User.find(req.query);
  res.status(200).json({
    success: true,
    data: users,
    users,
  });
};
