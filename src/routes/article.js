const express = require("express"); 
const {getArticle,upArticle} = require("../controller/article");
 
const router = express.Router();

//  "/api/v1/article"
router
  .route("/")
  .get(getArticle)
  .post(upArticle);
 
module.exports = router;
