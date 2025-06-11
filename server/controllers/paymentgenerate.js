const Razorpay = require("razorpay");
const crypto = require("crypto");
const { pool } = require("../db/database");
require("dotenv").config();

var instance = new Razorpay({
  key_id:process.env.RAZORPAY_KEY_ID,
  key_secret:process.env.RAZORPAY_KEY_SECRET,
});

const CreateOrder = async(req, res) => {
  try {
    const { Amount, Currency, Receipt } = req.body;
    
    // Options for Razorpay order creation
    const options = {
      amount: Amount,
      currency: Currency,
      receipt: Receipt,
    };

    // Wait for the order to be created
    const result = await instance.orders.create(options);
 
    // Send the created order in the response
    res.json({ response: result });
  } catch (error) {
    // Handle errors properly
    console.error("Error creating Razorpay order:", error);
    res
      .status(500)
      .json({ error: "Failed to create Razorpay order", details: error });
  }
};

module.exports = {CreateOrder}