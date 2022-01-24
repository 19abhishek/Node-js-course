const path = require("path");
const express = require("express");

console.log(__dirname);
console.log(__filename);

const app = express();
const publicPath = path.join(__dirname, "../public");

app.use(express.static(publicPath));

// app.get("/help", (req, res) => {
//   res.send({
//     name: "Abhishek",
//     age: 24,
//   });
// });

app.get("/about", (req, res) => {
  res.send("About Page.");
});
app.get("/weather", (req, res) => {
  res.send("Weather Page.");
});

app.listen(3000, () => {
  console.log("Server running on port 3000.");
});
