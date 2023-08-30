const mongoose = require("mongoose");

const locationSShema = new mongoose.Schema({
  Nom: String,
  Prenom: String,
  Voiture: String,
  Durer: String,
  InformationBancaire: String,
});

module.exports = mongoose.model("Location", locationSShema);
