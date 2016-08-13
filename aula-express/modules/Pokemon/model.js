//requisitando uma instancia do modulo mongoose
const mongoose = require('mongoose');
//instanciando um schema do mongoose
const Schema = mongoose.Schema;
// criando um schema para o nosso model
const _schema = {
	name:  String,
	attack: Number,
	defense: Number
}
//criando uma instancia do nosso schema chamando de pokemonSchema
const pokemonSchema = new Schema(_schema);
// criando um model para o schema
const PokemonModel = mongoose.model('Pokemon', pokemonSchema);
//exportando o modulo	
module.exports = PokemonModel
