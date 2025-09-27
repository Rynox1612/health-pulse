const express = require("express");
const app = express();
const hospitalRoute = require("./routes/hospital");

app.get("/", (req, res) => {
  res.send("server is working");
});

app.use("/healthCare", hospitalRoute);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
