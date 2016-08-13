require('./../../../db/config-test')
const assert = require('assert');
const Controller = require('./../controller.js')

describe('Pokemon module',()=>{
	before( (done) => {
		let Model = require('./../model')
		Model.remove({})
		done()
	});
	describe('Quando iniciarmos sem pokemons a lista deve vir vazia',()=>{
		it('Deve retornar um Array VAZIO', (done)=>{
			var query = {}
			var callback = (err,data) => {
				assert.equal(null,err,'Erro não é nulo')
				assert.equal(0,data.length,'Lista não veio vazia...')
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
	describe('Update',(done)=>{
		it('Quando atualizar, {"ok":1,"nModified":0,"n":1}', ()=>{
			var mod = {
				name: 'Mudanca'
				,attack: 9001
				,defense: 8001
			}
			var callback = (err,data) => {
				assert.equal(1, data.ok)
				assert.equal(true, (data.n>0))
				done()
			}
			Controller.update({},mod,callback);
		});
	});
	describe('Deletar',(done)=>{
		it('Quando deletar {"ok":1,"n":1}', ()=>{
			var qry = {}
			var callback = (err,data) => {
				assert.equal(1, data.ok)
				assert.equal(true, (data.n>0))
				done()
			}
			Controller.remove(qry,callback);
		});
	});


});
