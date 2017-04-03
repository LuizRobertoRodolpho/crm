var express 	= require('express');		// routes
var request		= require('request');
var app 		= module.exports = express();
var http		= require('http');
var serv 		= http.Server(app);
var port 		= process.env.PORT || 3000;
var path    	= require("path");

try
{
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname + '/index.html'));
	});
	
	app.get('/organization', function(req, res){
		Get_All_Organization_PIPEDRIVE(res);
	});

	app.post('/organization',function(req, res){
		Add_Organization_PIPEDRIVE(res);
	});
	
	serv.listen(port, function () {
		console.log('Example app listening on port ' + port);
	});
}
catch (e)
{
	console.log(e);
}

function Add_Organization_PIPEDRIVE(res) {
	try
	{
		console.log('post init');

		// Set the headers
		var headers = {
			'Content-Type': 'application/json',
				'Accepts' : 'application/json'
		}

		// Configure the request
		var options = {
			url: 'https://api.pipedrive.com/v1/organizations?api_token=e3686c7b77351639f744917ebc8a11b74c7ff6b4',
			method: 'POST',
			headers: headers,
			form: {
					"name": "Teste - POSTMAN 4",
					"owner_id": "2382831",
					"add_time": "2107-04-17 18:00:00",
					"visible_to": "3"
				}
		}

		// Start the request
		request(options, function (error, response, body) {
			if (!error && response.statusCode == 201) {
				// Print out the response body
				console.log('post success');
				res.send(body);
			}
			else
			{
				console.log('error?');
			}
		});
	}
	catch (e)
	{
		console.log('post error');
		res.send('Error!' + e);
	}
}

function Get_All_Organization_PIPEDRIVE(res)
{
	try
	{
		console.log('get init');

		// Set the headers
		var headers = {
			'Content-Type': 'application/json',
				'Accepts' : 'application/json'
		}

		// Configure the request
		var options = {
			url: 'https://api.pipedrive.com/v1/organizations?api_token=e3686c7b77351639f744917ebc8a11b74c7ff6b4',
			method: 'GET',
			headers: headers
		}

		// Start the request
		request(options, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				// Print out the response body
				//console.log(body);
				console.log('post success');
				res.send(body);
			}
			else
			{
				console.log('error?');
			}
		});
	}
	catch (e)
	{
		console.log('get error');
		res.send('Error!' + e);
	}
}