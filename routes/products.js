const router = require("express").Router();

let products = [
  { _id: "1", name: "Laptop", price: 50000 },
  { _id: "2", name: "Phone", price: 20000 }
];

router.get("/", (req,res)=>res.json(products));
router.post("/", (req,res)=>{
  products.push(req.body);
  res.json({status:"added"});
});

module.exports = router;
