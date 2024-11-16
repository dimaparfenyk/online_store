const express = require("express");
const ctrl = require("../controllers");

const router = express.Router();

router.get("/", ctrl.getAllProducts);

router.post("/", ctrl.createProduct);

router.put("/:id", ctrl.updateProduct);

router.delete("/:id", ctrl.deleteProduct);

module.exports = router;
