require('./../../../db/config-test')
const assert = require('assert');
const Controller = require('./../crud.js')

describe('Pokemon module',()=>{
	after( (done) => {
		let Model = require('./../model')
		Model.remove({})
		done()
	});
	describe('Quando iniciarmos sem pokemons a lista deve vir vazia',()=>{
		it('Deve retornar um Array VAZIO', (done)=>{
			var query = {}
			var callback = (err,data) => {
				assert.equal([],data,'lista veio vazia')
				done()
			}
			Controller.find(query,callback);
		});
	});	
	describe('Create',(done)=>{
		it('Quando cadastrar, o retorno deve ser o mesmo objeto adicionadado, _id', ()=>{
			var mod = {
				name: 'Teste'
				,attack: 9001
				,defense: 8001
			}
			var callback = (err,data) => {
				//assert.equal(mod,data,'lista veio vazia')
				assert.notEqual(undefined,data._id)
				assert.equal('Object',typeof data._id)
				done()
			}
			Controller.create(mod,callback);
		});
	});
});