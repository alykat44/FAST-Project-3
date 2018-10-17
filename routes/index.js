const router = require("express").Router();
const apiRoutes = require("./api");
const sendRoute = require("./api/send");

// API Routes
router.use("/api", apiRoutes);

router.use("/", sendRoute);

// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   console.log("No API Routes")
//   res.sendFile(path.join(__dirname, "../client/public/index.html"));
// });

module.exports = router;
