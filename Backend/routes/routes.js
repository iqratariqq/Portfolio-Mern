const { controler } = require("../Controller/Controller");
const express = require("express");
const Router = express.Router();

//rout
Router.post("/sendEmail", controler);



module.exports = Router;
