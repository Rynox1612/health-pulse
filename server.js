const express = require("express");
const app = express();
const hospitalRoute = require("./routes/hospital");
const path = require("path");
const engine = require("ejs-mate");
const mongoose = require("mongoose");

app.engine("ejs", engine);
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let MONGOOSE_URL = "mongodb://127.0.0.1:27017/pulseCity";
main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  mongoose.connect(MONGOOSE_URL);
}

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/map", (req, res) => {
  res.render("map");
});

app.use("/healthCare", hospitalRoute);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
