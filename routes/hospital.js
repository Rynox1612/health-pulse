const express = require("express");
const router = express.Router();
const Hospital = require("../models/hospitals");

//Index route
router.get("/", async (req, res) => {
  const hospitals = await Hospital.find({});
  res.render("index", { hospitals });
});

//New form
router.get("/new", (req, res) => {
  res.render("new");
});

//create route
router.post("/", async (req, res) => {
  const hospital = new Hospital(req.body.hospital);
  await hospital.save();
  res.redirect("/healthCare");
});

//Show route
router.get("/:id", async (req, res) => {
  let { id } = req.params;
  const hospital = await Hospital.findById(id);
  res.render("show", { hospital });
});

// //Edit form
// router.get("/:id/edit", (req, res) => {
//   res.send("edit form");
// });

// //Update Route
// router.post("/:id", (req, res) => {
//   res.send("update route");
// });

// //Destroy route
// router.delete("/:id", (req, res) => {
//   res.send("delete route");
// });

module.exports = router;
