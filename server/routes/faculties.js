
/** 
 * FileName:faculties.js
 * Author:Charlie Ding
 * StudentID:301159548
 * WebApplicationName:Faculty Information
 */

// modules required for routing
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
// const faculties = require("../models/faculties");

// define the faculty model
let faculty = require("../models/faculties");

/* GET faculties List page. READ */
router.get("/", (req, res, next) => {
  // find all faculties in the faculties collection
  faculty.find((err, faculties) => {
    if (err) {
      return console.error(err);
    } else {
      res.render("faculties/list", {
        title: "Faculties",
        faculties: faculties,
      });
    }
  });
});

//  GET the faculty Details page in order to add a new faculty
router.get("/add", (req, res, next) => {

  res.render("faculties/add", {
    title: "Add Faculty",
  });

});

// POST process the faculty  Details page and create a new faculty  - CREATE
router.post("/add", (req, res, next) => {
  /*****************
   * ADD CODE HERE *
   *****************/

   let newFaculty = faculty({
    Facultyname: req.body.Facultyname,
    Department: req.body.Department,
    Subject: req.body.Subject,
  });
  faculty.create(newFaculty, (err, Book) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the facultie list
      res.redirect("/faculties");
    }
  });

});

// GET the faculty  Details page in order to edit an existing faculty
router.get("/edit/:id", (req, res, next) => {
  /*****************
   * ADD CODE HERE *
   *****************/
   let id = req.params.id; //id of facultie object

   faculty.findById(id, (err, facultytoedit) => {
     if (err) {
       console.log(err);
       res.end(err);
     } else {
       //show the facultie edit view
       res.render("faculties/edit", {
         title: "Edit Faculty",
         facultie: facultytoedit,
       });
     }
   });

});

// POST - process the information passed from the details form and update the document
router.post("/edit/:id", (req, res, next) => {
  /*****************
   * ADD CODE HERE *
   *****************/
   let id = req.params.id; //id of facultie object

   let updatefaculty = faculty({
     _id: id,
    Facultyname: req.body.Facultyname,
    Department: req.body.Department,
    Subject: req.body.Subject,
   });
   faculty.updateOne({ _id: id }, updatefaculty, (err) => {
     if (err) {
       console.log(err);
       res.end(err);
     } else {
       //refresh the facultie list
       res.redirect("/faculties");
     }
   });
});

// GET - process the delete
router.get("/delete/:id", (req, res, next) => {
  /*****************
   * ADD CODE HERE *
   *****************/
  let id = req.params.id;
  faculty.remove({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //refresh facultie list
      res.redirect("/faculties");
    }
  });
});

module.exports = router;
