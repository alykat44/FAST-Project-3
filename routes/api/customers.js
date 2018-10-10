const router = require("express").Router();
const customersController = require("../../controllers/customerController");
// Matches with "/api/customers"
router.route("/")
  .post(customersController.create);

router.route("/customer")
  .post(customersController.create)
  .get(customersController.findAll);

router
  .route("/:id")
  .get(customersController.findById)
  .put(customersController.update)
  .delete(customersController.remove);

module.exports = router;
