const express = require("express");
const app = express();
app.use((req, res, next) => {
  let dt = Date.now();
  let dateConn = new Date(dt);
  if (
    dateConn.getDay() == 0 ||
    dateConn.getDay() == 6 ||
    dateConn.getHours() < 9 ||
    dateConn.getHours() > 18
  ) {
    res.send("Vous êtes en dehors des horaires de travail");
    return;
  }
});
app.get("/Home", (req, res) => {
  res.sendFile(__dirname + "/page/Home.html");
});
app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/page/Contact us.html");
});
app.get("/services", (req, res) => {
  res.sendFile(__dirname + "/page/Our Services.html");
});

const port = 3000;
app.listen(port, () => {
  console.log("The server is running in port 3000");
});
