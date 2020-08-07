const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const url =
  "mongodb+srv://shellyambar:metukonet101@cluster0.87e7h.mongodb.net/<dbname>?retryWrites=true&w=majority";
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB is connected."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {});
app.listen(port);
