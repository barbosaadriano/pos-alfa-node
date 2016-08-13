const assert = require('assert');
const Controller = require('./../crud.js');

describe('Pokemon module',()=>{
	describe('Quando iniciarmos sem pokemons a lista deve vir vazia',()=>{
		it('Deve retornar um Array VAZIO', ()=>{
			var query = {}
			var callback = (err,data) => {
				assert.equal([],data,'lista veio vazia')
			}
			Controller.find(query,callback);
		});
	});	
	describe('Create',()=>{
		it('Quando cadastrar, o retorno deve ser o mesmo objeto adicionadado, _id', ()=>{
			var mod = {
				name: 'Teste'
				,attack: 9001
				,defense: 8001
			}
			var callback = (err,data) => {
				//assert.equal(mod,data,'lista veio vazia')
				assert.notEqual(undefined,data._id)
			}
			Controller.create(mod,callback);
		});
	});
});