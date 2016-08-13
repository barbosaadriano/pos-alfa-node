const http = require("http")
require('./config')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
	name:  String,
	attack: Number,
	defense: Number
}
const pokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('Pokemon', pokemonSchema);
let query;

http.createServer((request, response) => {
	response.writeHead(200, {"Content-Type": "application/JSON;charset=utf-8"})
	const url = request.url
	console.log(url)
	switch(url) { 
		case('/listar'):
			let listagem = [
				{"name":"Adriano Barbosa","age":26},
				{"name":"Teste","age":27},
				{"name":"Tests","age":27},
				{"name":"Testeasd","age":2}
			]
			query = {};

			PokemonModel.find(query, function (err, data) {
				if (err) return console.log('ERRO: ', err);
				//return console.log('Buscou:', data);
				response.end(JSON.stringify(data))
			})
			
		break
		case('/excluir'):
			query = {name: /suissamon/i};
			PokemonModel.remove(query, (err, data) => {
				if (err) return console.log('ERRO: ', err);
				return console.log('Buscou:', data);
			})
			response.end()
		break
		case('/alterar'):
			query = {name: /suissamon/i};
			let mod = {attack:9001}
			//usuado no terceiro parametro
			const option = {
				multi:true,
				upsert:true
			}
			PokemonModel.update(query, mod, (err, data) => {
				if (err) return console.log('ERRO: ', err);
				return console.log('Buscou:', data);
			})
			response.end()
		break
		case('/criar'):
			PokemonModel.create({ name: 'Suissamon' }, function (err, data) {
				if (err) return console.log('ERRO: ', err);
				return console.log('Inseriu:', data);
			});
			response.end()
		break
		default:
			response.write(JSON.stringify({"mensagem":"Nenhuma rota foi requisitada! Os serviços disponíveis são: "
			+" listar, excluir, alterar, incluir"}))
			response.end()
		break
		}
	}).listen(3000)
console.log('Server running at http://localhost:3000/')
