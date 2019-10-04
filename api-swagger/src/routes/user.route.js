const express = require("express");

const RoutesUser = express.Router();

RoutesUser.post("/:id", (req, res) => {
  res.json({
    status: 200,
    message: "user added"
  });
});

module.exports = { RoutesUser };
