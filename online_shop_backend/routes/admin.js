const express = require("express");
const route = express.Router();
const admin = require("../controller/Admin");
const { protect, authorize } = require("../middleware/protect");

route.post("/api/admin/user/register", admin.register);
route.post("/api/admin/user/login", admin.login);
route.get("/api/admin/me", admin.auth);
route.get("/api/admin/user/admins", admin.admins);
route.delete("/api/admin/user/delete/:id", admin.delete);
route.get("api/admin/authorize", admin.auth);
module.exports = route;
