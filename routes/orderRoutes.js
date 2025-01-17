const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const authMiddlewares = require("../middlewares/authMiddlewares");

router.post("/", authMiddlewares.protect, orderController.createOrder);
router.get("/", authMiddlewares.protect, orderController.getOrder);
router.get("/all", authMiddlewares.protect, authMiddlewares.isAdmin, orderController.getAllOrder);
router.patch("/:id", authMiddlewares.protect, authMiddlewares.isAdmin, orderController.updateStatus);
router.post("/cancel/:id", authMiddlewares.protect, orderController.cancelOrder);

module.exports = router;
