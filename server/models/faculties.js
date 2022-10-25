/** 
 * FileName:faculties.js
 * Author:Charlie Ding
 * StudentID:301159548
 * WebApplicationName:Faculty Information
 */


let mongoose = require("mongoose");

// create a model class
let Faculty = mongoose.Schema(
  {
    Facultyid: Number,
    Facultyname: String,
    Department: String,
    Subject: String,
  },
  {
    collection: "faculties",
  }
);

module.exports = mongoose.model("Faculty", Faculty);
