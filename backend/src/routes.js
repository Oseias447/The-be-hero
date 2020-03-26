const express = require("express");

const OngController = require("../src/controllers/OngCrontrolle");
const IncidentController = require("../src/controllers/IncidentController");
const ProfileController = require("../src/controllers/ProfileController");
const SessionController = require("../src/controllers/SessionController");

const routes = express.Router();

routes.use(express.json());

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

routes.post("/incidents", IncidentController.create);
routes.get("/incidents", IncidentController.index);
routes.delete("/incidents/:id", IncidentController.delete);

routes.get("/profile", ProfileController.index);
routes.post("/sessions", SessionController.create);

module.exports = routes;
