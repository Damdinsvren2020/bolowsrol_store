const express = require("express");
const router = express.Router();
const subcategory = require("../controller/SubCategory");

router.get("/api/subcategory", subcategory.getSubCategory);
router.post("/api/subcategory", subcategory.createSubCategory);
router.delete("/api/subcategory/:id", subcategory.delete);

module.exports = router;
