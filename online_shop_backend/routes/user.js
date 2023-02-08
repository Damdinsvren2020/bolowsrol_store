const express = require("express");
const { protect, authorize } = require("../middleware/protect");
const { register, login, auth, getUsers } = require("../controller/User");
const router = express.Router();

router.route("/api/v1/register").post(register);
router.route("/api/v1/login").post(login);
router.route("/api/v1/auth").get(auth);
router.route("/api/v1/users", protect, authorize("admin")).get(getUsers);
module.exports = router;
