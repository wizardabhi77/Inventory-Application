
const pool = require("./pool");

async function getAllPokemon(){
    const { rows } = await pool.query("Select * from pokemon");
    return rows;
}

async function getPokemonByType(type) {

    const { rows } = await pool.query("Select * from pokemon where type = $1",[type]);
    console.log(rows);
    return rows;
}

async function createPokemon (pokemon, trainer, type){
    await pool.query("insert into pokemon (pokemon, trainer, type) values ( $1, $2, $3)",[pokemon, trainer, type]);
}

async function updatePokemon (pokemon, trainer, type,id){
    await pool.query("update pokemon set pokemon = $1, trainer = $2, type = $3 where id = $4", [pokemon,trainer,type,id]);
}

async function getPokemonById(id){
    const { rows } = await pool.query("select * from pokemon where id = $1",[id]);
    return rows[0];
}

async function deletePokemonById(id){
    await pool.query("delete from pokemon where id = $1",[id]);
}

module.exports = {
    getAllPokemon,
    getPokemonByType,
    createPokemon,
    getPokemonById,
    updatePokemon,
    deletePokemonById
} 

