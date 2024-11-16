const Product = require("../models/product.model");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ succsess: false, message: "Server error" });
  }
};

module.exports = getAllProducts;
