const express = require("express");
// const mongoose = require("mongoose");
const app = express();

// routes
app.use("/api/", require("./routes/api/routes"));

app.use(function(req, res, next) {
    res.status(404).send("Se ha producido un error en el servidor, inténtelo de nuevo más tarde.");
    next();
});

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
    // Set static folder
    app.use(express.static("frontend/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
