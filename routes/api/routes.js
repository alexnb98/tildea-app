const express = require("express");
const router = express.Router();

//Silaba Tonica
router.get("/silaba-tonica/1", (req, res) => res.json(require("../../data/silaba-tonica/1")));

//Agudas
router.get("/agudas/1", (req, res) => res.json(require("../../data/agudas/1")));

//Graves
router.get("/graves/1", (req, res) => res.json(require("../../data/graves/1")));

//Esdrujulas
router.get("/esdrujulas/1", (req, res) => res.json(require("../../data/esdrujulas/1")));

//Sobreesdrujulas
router.get("/sobreesdrujulas/1", (req, res) => res.json(require("../../data/sobreesdrujulas/1")));

//Acento
router.get("/acento/1", (req, res) => res.json(require("../../data/acento/1")));

//Tilde Diacritica
router.get("/tilde-diacritica/1", (req, res) => res.json(require("../../data/tilde-diacritica/1")));

//Diptongos
router.get("/diptongos/1", (req, res) => res.json(require("../../data/diptongos/1")));

//Triptongos
router.get("/triptongos/1", (req, res) => res.json(require("../../data/triptongos/1")));

//Hiatos
router.get("/hiatos/1", (req, res) => res.json(require("../../data/hiatos/1")));

module.exports = router;
