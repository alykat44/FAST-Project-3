const router = require("express").Router();
const customerRoutes = require("./customers");

// customer routes
router.use("/customers", customerRoutes);

module.exports = router;
