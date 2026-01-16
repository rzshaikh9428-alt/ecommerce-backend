const express = require("express");
const router = express.Router();

/* TEMP DATA */
const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 }
];

/* GET PRODUCTS */
router.get("/", (req, res) => {
  res.json(products);
});

/* ADD PRODUCT */
router.post("/", (req, res) => {
  products.push(req.body);
  res.json({ message: "Product added" });
});

module.exports = router;
