const express = require("express");
const app = express();
const hospitalRoute = require("./routes/hospital");
const path = require("path");
const engine = require("ejs-mate");

app.engine("ejs", engine);
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("server is working");
});

app.use("/healthCare", hospitalRoute);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
