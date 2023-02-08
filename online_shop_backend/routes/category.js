const express = require("express");
const router = express.Router();
const category = require("../controller/Category");

router.get("/api/category", category.getCategory);
router.post("/api/category_create", category.createCategory);
router.put("/api/category_update/:id", category.editCategory);
router.delete("/api/category_delete/:id", category.deleteCategory);

module.exports = router;
