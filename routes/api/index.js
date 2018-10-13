const router = require("express").Router();
const customerRoutes = require("./customers");

// Book routes
router.use("/customers", customerRoutes);

router.use("/send", customerRoutes);

// router.use("/dispatch", customerRoutes);

module.exports = router;
