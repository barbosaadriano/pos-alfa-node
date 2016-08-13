	const http = require("http")

	http.createServer((request, response) => {
		response.writeHead(200, {"Content-Type": "application/json;charset=utf-8"})
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
			response.write(JSON.stringify(listagem))
			response.end()
			break
			case('/excluir'):
			response.end()
			break
			case('/alterar'):
			response.end()
			break
			case('/criar'):
			response.end()
			break
			default:
			response.write(JSON.stringify({"mensagem":"Nenhuma rota foi requisitada! Os serviços disponíveis são: "
				+" listar, excluir, alterar, incluir"}))
			response.end()
			break
		}
		
	})
	.listen(3000)
	console.log('Server running at http://localhost:3000/')
