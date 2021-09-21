const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, respond) => {
  respond.sendFile(__dirname + "/index.html");
});

app.post("/", (req, respond) => {
  let num1 = +req.body.num1;
  let num2 = +req.body.num2;
  var result = num1 + num2;
  respond.send("The sum of two number is   " + result);
});

app.listen(3000, () => {
  console.log("server is now running");
});
