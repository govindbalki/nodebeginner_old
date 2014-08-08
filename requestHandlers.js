var exec=require("child_process").exec;
var querystring=require("querystring");

function start(response, postData){ 
 	console.log("Request handler 'start' was called."); 

 	var fs = require('fs');
	var file = fs.readFileSync('index.html', "utf8");
	var buf = new Buffer(file);

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(buf.toString());
    response.end();


 	/*exec("find /",
		{ timeout: 10000, maxBuffer: 20000*1024 }, 
 		function (error, stdout, stderr) { 
	 		response.writeHead(200, {"Content-Type": "text/plain"}); 
	 		response.write(stdout);
			response.end();
		}
	);*/
}

function upload(response, postData){
	console.log("Request handler 'upload' was called."); 
	console.log(postData);
	response.writeHead(200, {"Content-Type": "text/plain"}); 
	response.write("You've sent: " + querystring.parse(postData).text);
	response.end();
}

exports.start=start;
exports.upload=upload;