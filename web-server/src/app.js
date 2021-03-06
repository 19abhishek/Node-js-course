const path = require("path");
const express = require("express");
const hbs = require("hbs");

console.log(__dirname);
console.log(__filename);

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    author: "Abhishek",
    name: "Nik",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    author: "Abhishek",
    name: "Nik",
  });
});

// app.get("/help", (req, res) => {
//   res.send({
//     name: "Abhishek",
//     age: 24,
//   });
// });

// app.get("/about", (req, res) => {
//   res.send("About Page.");
// });

app.get("/weather", (req, res) => {
  res.send("Weather Page.");
});

app.listen(3002, () => {
  console.log("Server running on port 3000.");
});
