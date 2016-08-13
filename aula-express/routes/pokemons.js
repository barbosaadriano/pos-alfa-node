const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
	name:  String,
	attack: Number,
	defense: Number
}
const pokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('Pokemon', pokemonSchema);

/* GET users listing. */
router.get('/', function(req, res, next) {
	query = {};
			PokemonModel.find(query, function (err, data) {
				if (err) return console.log('ERRO: ', err);
				//return console.log('Buscou:', data);
				  res.json(data);
			})

});
router.get('/:id', function(req, res, next) {
	query = {_id:req.params.id};
			PokemonModel.findOne(query, function (err, data) {
				if (err) return console.log('ERRO: ', err);
				//return console.log('Buscou:', data);
				  res.json(data);
			})

});
router.put('/:id', function(req, res, next) {
	query = {_id:req.params.id};
			let mod = req.body
			PokemonModel.update(query, mod, function (err, data) {
				if (err) return console.log('ERRO: ', err);
				//return console.log('Buscou:', data);
				  res.json(data);
			})

});
router.delete('/:id', function(req, res, next) {
	query = {_id:req.params.id};
			PokemonModel.delete(query, function (err, data) {
				if (err) return console.log('ERRO: ', err);
				//return console.log('Buscou:', data);
				  res.json(data);
			})

});
router.post('/',function(req, res, next) {
			let mod = req.body
			PokemonModel.create(mod, function (err, data) {
				if (err) return console.log('ERRO: ', err);
				//return console.log('Buscou:', data);
				  res.json(data);
			})

});


module.exports = router;
