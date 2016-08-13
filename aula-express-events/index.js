const events = require('events')
const eventEmitter = new events.EventEmitter()
const cagar = function () {
	console.log('cagando...')
}
var correrParaOBanheiro = function () {  
  console.log('correndo para o banheiro...');
};
var pegarPapelHigienico = function () {  
  console.log('pegando o papele higienico com calma e cuidado...');
};
var limparABunda = function () {  
  console.log('limpando o orifício anal para ficar macio e sedoso...');
};
var passarBomAr = function () {  
  console.log('passando Bom Ar para mascarar o fedor de gambá apodrecendo...');
};

// Ligamos o evento vontadeDeCagar com as funções
eventEmitter.on('vontadeDeCagar', correrParaOBanheiro);  
eventEmitter.on('vontadeDeCagar', cagar);  
eventEmitter.on('vontadeDeCagar', pegarPapelHigienico);  
eventEmitter.on('vontadeDeCagar', limparABunda);  
eventEmitter.on('vontadeDeCagar', passarBomAr); 

eventEmitter.emit('vontadeDeCagar');  