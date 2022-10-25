/** 
 * FileName:index.js
 * Author:Charlie Ding
 * StudentID:301159548
 * WebApplicationName:Faculty Information
 */

// modules required for routing
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");


/* GET home page. wildcard */
router.get("/", (req, res, next) => {
  res.render("content/index", {
    title: "Home",
    faculties: "",
  });
});

module.exports = router;
