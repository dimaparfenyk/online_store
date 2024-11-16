const Product = require("../models/product.model");

const createProduct = async (req, res) => {
  const { name, price, image } = req.body;

  if (!name || !price || !image) {
    return res
      .status(400)
      .json({ succsess: false, message: "Please provide all fields" });
  }

  try {
    const product = await Product.create({ ...req.body });
    res.status(201).json(product);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ succsess: false, message: "Server error" });
  }
};

module.exports = createProduct;
