const express = require("express");
const cors = require("cors");

const courses = require("./courseDetails.json");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send(courses);
});

app.listen(port, () => {
  console.log(`Server is Running on Port ${port}`);
});
