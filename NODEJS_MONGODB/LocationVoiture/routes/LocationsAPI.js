const express = require("express");
const router = express.Router();
const Location = require("../model/modelsLocation");

router.get("/reservation", (req, res) => {
  Location.find()
    .exec()
    .then((envoi) => res.status(200).json(envoi))
    .catch((err) => res.status(500).json(err));
});

router.post("/newReservation", (req, res) => {
  console.log("req.body", req.body);
  if (!req.body.Voiture) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  const loc = new Location(req.body);

  loc
    .save()
    .then((loc) => res.status(201).json(loc))
    .catch((err) => res.status(500).json(err));
});

router.delete("/delUneLocation/:id", (req, res) => {
  const id = req.params.id;
  Location.findByIdAndDelete(id)
    .then((Location) =>
      res
        .status(202)
        .json({ msg: `La réservation avec l'id ${Location._id} supprimée` })
    )
    .catch((err) => res.status(500).json(err));
});

router.put("/upReservation/:id", (req, res) => {
  const id = req.params.id;
  Location.findById(id)
    .then((Location) => {
      Location.Nom = req.body.Nom;
      Location.Prenom = req.body.Prenom;
      Location.Voiture = req.body.Voiture;
      Location.Durer = req.body.Durer;
      Location.InformationBancaire = req.body.InformationBancaire;

      Location.save()
        .then(() => res.json("Edition de la réservation reussie"))
        .catch((err) => res.status(400).json("Erreur de sauvegarde " + err));
    })
    .catch((err) => res.status(400).json("Erreur avec l'id " + err));
});

router.get("/lireUneReservation/:id", (req, res) => {
  const id = req.params.id;
  Location.findById(id)
    .then((Location) => res.json(Location))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
