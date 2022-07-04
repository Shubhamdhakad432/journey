const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

// Express specification stuff
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use("/static", express.static("static")); //serve static file
app.use("/images", express.static("images")); //serve static file

//endpoints (get, post etc)
app.get("/", (req, res) => {
  const param = {};
  res.status(200).render("index.ejs", param);
});

app.get("/views/migame.ejs", (req, res) => {
  const param = {};
  res.status(200).render("migame.ejs", param);
});

app.get("/views/index.ejs", (req, res) => {
  const param = {};
  res.status(200).render("index.ejs", param);
});

app.get("/views/tic_tac.ejs", (req, res) => {
  const param = {};
  res.status(200).render("tic_tac.ejs", param);
});

app.get("/views/path.ejs", (req, res) => {
  const param = {};
  res.status(200).render("path.ejs", param);
});

app.get("/views/about.ejs", (req, res) => {
  const param = {};
  res.status(200).render("about.ejs", param);
});

// start the server
app.listen(port, () => {
  console.log(`this is started in successful run on ${port}`);
});
