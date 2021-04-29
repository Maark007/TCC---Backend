const express = require("express");
const routes = express.Router();

const UserController = require("../controllers/userController");

routes.get("/students", UserController.getStudents);
routes.post("/register", UserController.post);
routes.post("/login", UserController.login);
routes.get("/user/:id", UserController.get);

module.exports = routes;
