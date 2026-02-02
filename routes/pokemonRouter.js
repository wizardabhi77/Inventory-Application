
const { Router } = require("express");
const pokemonController = require("../controllers/pokemonController");

const pokemonRouter = Router();

pokemonRouter.get("/", pokemonController.getPokemon);
pokemonRouter.get("/new",pokemonController.getCreate);
pokemonRouter.get("/:id/update", pokemonController.getUpdate);

pokemonRouter.post("/type", pokemonController.pokemonByTypePost);
pokemonRouter.post("/create", pokemonController.postCreate);
pokemonRouter.post("/:id/update", pokemonController.postUpdate);


module.exports = pokemonRouter;