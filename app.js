
require('dotenv').config()
const express = require("express");
// Handlebars
const hbs = require("hbs");
hbs.registerPartials(__dirname + "/views/partials");


const app = express();
const port = process.env.PORT;

// handlebars

app.set("view engine", "hbs");

// static server

app.use( express.static('public'))

app.get("/", (req, res) => {
  res.render('home', {
    title: 'Raod Trip',
    name: ' by Enrique'
  })
});
app.get("/elements", (req, res) => {
  res.render("elements", {
    title: "Raod Trip",
    name: " by Enrique",
  });
});
app.get("/generic", (req, res) => {
  res.render("generic", {
    title: "Raod Trip",
    name: " by Enrique",
  });
});

// app.get("/generic", (req, res) => {
//   res.sendFile(__dirname + "/public/generic.html");
// });


// app.get("/elements", (req, res) => {
//   res.sendFile(__dirname + "/public/elements.html");
// });

// app.get("/", (req, res) =>{
//   res.send("Home");
// });
// app.get("/hello-world", (req, res) =>{
//   res.send("Hello World");
// });
app.get("*", (req, res) =>{
  res.send("404 | Page not found");
});


app.get("/generic", (req, res) => {
  res.sendFile( __dirname + '/public/generic.html')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});