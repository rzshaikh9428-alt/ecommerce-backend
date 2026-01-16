const router = require("express").Router();
const jwt = require("jsonwebtoken");

router.post("/login", (req, res) => {
  const token = jwt.sign({ role: "admin" }, process.env.JWT_SECRET);
  res.json({ token });
});

router.post("/register", (req, res) => {
  res.json({ status: "registered" });
});

module.exports = router;
