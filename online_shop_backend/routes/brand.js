const express = require("express");
const router = express.Router();
const brand = require("../controller/Brand");

router.get("/api/brand", brand.getBrand);
router.post("/api/brand_create", brand.createBrand);
router.put("/api/brand_update/:id", brand.editBrand);
router.delete("/api/brand_delete/:id", brand.deleteBrand);

module.exports = router;
