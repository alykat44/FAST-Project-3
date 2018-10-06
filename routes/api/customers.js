const router = require("express").Router();
const customersController = require("../../controllers/customerController");

// Matches with "/api/books"
router
  .route("/")
  .get(customersController.findAll)
  .post(customersController.create);

// Matches with "/api/books/:id"
router
  .route("/:Issue")
  .get(customersController.findById)
  .put(customersController.update)
  .delete(customersController.remove);

module.exports = router;
