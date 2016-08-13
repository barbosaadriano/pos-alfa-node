'use strict'
//requisitando o model
//const PokemonModel = require('./model');
const CRUD = require('./crud');
//criando o objeto controller
const Controller ={
	//definindo a operacao create
	create: (req,res) => {
		let mod = req.body
		let cb = (err,data) => {			
				if (err) throw new Error(err)
				res.json(data)
		}
		CRUD.create(mod,cb);
	},

	//definindo operacao listar todos
	find: (req,res) => {
		let query = {};
		CRUD.find(query, function (err, data) {
			if (err) return console.log('ERRO: ', err);
			res.json(data);
		})
	},
	//definindo a operacao localizar 1
	findOne: (req, res) => {
		let query = {_id:req.params.id};
		CRUD.findOne(query, function (err, data) {
			if (err) return console.log('ERRO: ', err);
			res.json(data);
		})
	},
	//definindo a operação update
	update: (req,res)=> {
		let query = {_id:req.params.id};
		let mod = req.body
		CRUD.update(query, mod, function (err, data) {
			if (err) return console.log('ERRO: ', err);
			res.json(data);
		})
	},
	//definindo a operacao remove
	remove: (req,res) => {
		let query = {_id:req.params.id};
		CRUD.remove(query, function (err, data) {
			if (err) return console.log('ERRO: ', err);
			res.json(data);
		})
	}
}
//exportando o modulo
module.exports = Controller;