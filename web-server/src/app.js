const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.get("/help", (req, res) => {
  res.send({
    name: "Abhishek",
    age: 24,
  });
});
app.get("/about", (req, res) => {
  res.send("About Page.");
});
app.get("/weather", (req, res) => {
  res.send("Weather Page.");
});

app.listen(3000, () => {
  console.log("Server running on port 3000.");
});
