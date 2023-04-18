const express = require("express");
const homeController = require("../controllers/user/homeController");
const getProductsController = require("../controllers/user/getProductsController");
const getSingleProductController = require("../controllers/user/getSingleProductController");

const router = express.Router();

router.get("/", homeController);

router.get("/api/v1/products", getProductsController);
router.get("/api/v1/products/:id", getSingleProductController);

module.exports = router;
