const router = require("express").Router();
const customerRoutes = require("./customers");

// Book routes
router.use("/customers", customerRoutes);

<<<<<<< HEAD
=======
// router.use("/dispatch", customerRoutes);
>>>>>>> 8f0b0aec74e06d08b60d3646847afeccdca26df9

module.exports = router;
