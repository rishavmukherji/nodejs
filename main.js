
//Tutoral1 to set up a nodejs server at port 8081 on the local machine
/*
var http = require("http");

http.createServer (function (request, response) {
	response.writeHead (200, {});
	response.end ('hellow world \n');

}).listen(8081);

console.log('server running at http://127/0/0/1:8081');
*/

//Blocking Code Example
/*
var fs = require("fs");
var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("program ended");
*/

//Non-Blocking Code Example
var fs = require ("fs");

fs.readFile('input.txt', function (err, data) {
	if(err)
		return console.error(err);
	console.log(data.toString());
});

console.log("Program Ended");