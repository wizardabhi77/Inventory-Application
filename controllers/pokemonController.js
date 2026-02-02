const db = require("../db/queries");


async function getPokemon (req,res) {

    const pokemon = await db.getAllPokemon();
    res.render("index",{pokemon : pokemon});
}

async function pokemonByTypePost(req, res) {
    console.log(req.body.type);
    const type = req.body.type;
    const pokemon = await db.getPokemonByType(type);
    res.render("item", {pokemon : pokemon});
}

async function postCreate(req, res) {
    const {pokemon, trainer, type } = req.body;

    await db.createPokemon(pokemon, trainer, type);

    res.redirect("/");
    
}

function getCreate(req,res) {
    res.render("create");
}

async function postUpdate(req, res) {

    const id = req.params.id;
    const {pokemon, trainer, type } = req.body;

    await db.updatePokemon(pokemon, trainer, type, id);

    res.redirect("/"); 
}

async function getUpdate(req,res) {
    
    const id = req.params.id;
    const pokemon = await db.getPokemonById(id);
    res.render("update",{pokemon: pokemon});

   
}

module.exports = {
    getPokemon,
    pokemonByTypePost,
    getCreate,
    postCreate,
    getUpdate,
    postUpdate
}