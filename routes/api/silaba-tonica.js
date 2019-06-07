const express = require("express");
const router = express.Router();

//data
// const start = require("../../data/agudas/start");
const one = require("../../data/silaba-tonica/1");

// router.get("/start", (req, res) => res.json(start));
router.get("/1", (req, res) => res.json(one));

module.exports = router;
