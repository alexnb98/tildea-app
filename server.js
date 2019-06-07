const express = require("express");
// const mongoose = require("mongoose");
const app = express();
const port = 5000;

// routes
app.use("/api/agudas", require("./routes/api/agudas"));

app.get("/", (req, res) => res.send("<h1>hello world</h1>"));

app.listen(port, () => console.log("app running"));
