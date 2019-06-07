const express = require("express");
// const mongoose = require("mongoose");
const app = express();
const port = 5000;

// routes
app.use("/api/agudas", require("./routes/api/agudas"));
app.use("/api/silaba-tonica", require("./routes/api/silaba-tonica"));
app.use("/api/tilde-diacritica", require("./routes/api/tilde-diacritica"));

app.use(function(req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});

app.listen(port, () => console.log("app running"));
