// set up server needs
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// all paths go within this file

const router = express.Router();

// helper response function to redirect react router paths to index.html
const reactRoute = (req, res) => res.sendFile(path.resolve(__dirname, '../client/dist/index.html'));

// send index.html for react router's routes
router.get('/login', reactRoute);

module.exports = router;
