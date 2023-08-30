const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connection = mongoose.connection;
const cors = require("cors");
app.use(express.json());
app.use(cors());
const API = require("./routes/LocationsAPI");
app.use("/royalcass", API);

mongoose.connect("mongodb://Diallo:12345@10.30.40.121:27017/Diallo", {
  useNewUrlParser: true,
});
/*mongoose.connect("mongodb://localhost:27017/Location", {
  useNewUrlParser: true,
});*/

connection.once("open", () => {
  console.log("Connected to MongoDB");
});

app.listen(3087, () => {
  console.log("j'écoute le port 3087!");
});
