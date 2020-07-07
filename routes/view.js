// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
const router = require("express").Router();
const path = require("path");
// Routes
// =============================================================

// Each of the below routes just handles the HTML page that the user gets sent to.

// index route loads index.html
// router.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "../public/index.html"));
// });

// exercise route loads exercise.html
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// stats route loads stats.html
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;