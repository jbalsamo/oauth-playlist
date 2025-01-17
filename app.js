const express = require("express");

const app = express();

// Setup a view engine
app.set("view engine", "ejs");

// Create home route
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => console.log("Server started on port 3000"));
