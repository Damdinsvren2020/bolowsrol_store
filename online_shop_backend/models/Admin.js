const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  avatar: { type: String, required: true },
  active: { type: Boolean, required: false, default: false },
  erh: { type: String, required: true },
});

module.exports = mongoose.model("admin", AdminSchema);
