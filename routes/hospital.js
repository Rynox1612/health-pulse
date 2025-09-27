const express = require("express");
const router = express.Router();

//Index route
router.get("/", (req, res) => {
  res.render("home.ejs");
});

//New form
router.get("/new", (req, res) => {
  res.send("index route");
});

//create route
router.post("/", (req, res) => {
  res.send("create Route");
});

//Show route
router.get("/:id", (req, res) => {
  res.send("show Route");
});

//Edit form
router.get("/:id/edit", (req, res) => {
  res.send("edit form");
});

//Update Route
router.post("/:id", (req, res) => {
  res.send("update route");
});

//Destroy route
router.delete("/:id", (req, res) => {
  res.send("delete route");
});

module.exports = router;
