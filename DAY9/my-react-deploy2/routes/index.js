var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send(path.join(__dirname, "public/build"));
});

module.exports = router;
