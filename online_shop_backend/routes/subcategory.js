const express = require("express");
const router = express.Router();
const subCategory = require("../controller/SubCategory");

router.get("/api/subcategory", subCategory.getSubCategory);
router.post("/api/subcategory_create", subCategory.createSubCategory);
router.update("/api/subcategory_update/:id", subCategory.updateCategory);
router.delete("/api/subcategory_delete/:id", subCategory.deleteSubCategory);

module.exports = router;
