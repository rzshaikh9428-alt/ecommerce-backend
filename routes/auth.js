const router = require("express").Router();
const jwt = require("jsonwebtoken");

router.post("/login", (req,res)=>{
  const token = jwt.sign({id:1}, "secret");
  res.json({token});
});

router.post("/register",(req,res)=>{
  res.json({status:"ok"});
});

module.exports = router;
