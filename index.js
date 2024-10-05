const express = require("express");
const cors = require("cors");

const courses = require("./data/courseDetails.json");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.get("/", (req, res) => {
  res.send("Server is Running.");
});
app.get("/api/products", (req, res) => {
  res.send(courses);
});

app.get("/api/products/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = courses.find((course) => course._id == id);
  res.send(selectedCourse);
});

app.get("/category/:id", (req, res) => {
  const course_id = req.params.id;
  const selectedCategory = courses.filter(
    (course) => course.course._id === course_id
  );
  res.send(selectedCategory);
});

app.listen(port, () => {
  console.log(`Server is Running on Port ${port}`);
});
