
const Express = require("express");

const app = Express();
const path = require("node:path");
const pokemonRouter = require("./routes/pokemonRouter");

app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));
app.set(Express.urlencoded({extended: true}));

app.use("/", pokemonRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) => {
    if(error){
        throw error;
    }
    console.log(`Express app listening at ${PORT}!`);
})

