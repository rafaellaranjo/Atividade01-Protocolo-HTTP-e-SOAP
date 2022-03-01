var http = require('http');

var server = http.createServer( function(req, res){

	res.end(`
	<html>
		<body>
			<div>
				<h3>Soma</h3>
				<input type="number" min="0" id="Arg1" placeholder="Valor 1"/>
				<input type="number" min="0" id="Arg2" placeholder="Valor 2"/>
				<button onclick="">Somar</button>
			</div>
		</body>
	</html>`);

});

server.listen(3000);

var soap = require('soap');
var url = 'https://www.crcind.com/csp/samples/SOAP.Demo.cls?wsdl';
soap.createClient(url, function(err, client) {
	// chamada adição inteiro
    client.AddInteger({ Arg1: "1", Arg2: "3" }, function(err, result) {
      	if(err) return console.log(err);
      	console.log("Resultado da Adição => "+result.AddIntegerResult);
    });

	// chamada dividir inteiro
	client.DivideInteger({ Arg1: "20", Arg2: "3" }, function(err, result) {
		if(err) return console.log(err);
		console.log("Resultado da Divisão => "+result.DivideIntegerResult);
  	});

	// chamada find person
	client.FindPerson({ id: "7" }, function(err, result) {
		if(err) return console.log(err);
		console.log(result.FindPersonResult);
  	});
});