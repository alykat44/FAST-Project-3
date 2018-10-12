const router = require("express").Router();
const customersController = require("../../controllers/customerController");
// Matches with "/api/customers"
<<<<<<< HEAD
router.route("/")
  .post(customersController.create);

router.route("/customer")
  .post(customersController.create)
  

router
  .route("/Issue")
  .get(customersController.findById)
  .put(customersController.update)
  .delete(customersController.remove);
=======
router
  .route("/")
  .post(customersController.create)
  .get(customersController.findAll);

// router
//   .route("/customers")
//   .post(customersController.create)
//   .get(customersController.findAll);

// router
//   .route("/:Issue")
//   .get(customersController.findById)
//   .put(customersController.update)
//   .delete(customersController.remove);
>>>>>>> 8f0b0aec74e06d08b60d3646847afeccdca26df9

module.exports = router;
