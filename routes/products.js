const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const auth = require("../middleware/auth");

/* PUBLIC – VIEW PRODUCTS */
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

/* ADMIN – ADD PRODUCT */
router.post("/", auth, async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
});

/* ADMIN – DELETE PRODUCT */
router.delete("/:id", auth, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
});

module.exports = router;
