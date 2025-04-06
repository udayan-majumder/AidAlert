const express = require("express");
const router = express.Router();
const {CreateOrder} = require("../controllers/paymentgenerate");

router.post("/create-order", CreateOrder);


module.exports = router;
