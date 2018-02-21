var http = require('http');
var static = require( 'node-static' );
var file = new static.Server( './public', {
    cache: 3600,
    gzip: true
} );


http.createServer(function (req, res) {
    
     req.addListener( 'end', function () {
        file.serve( req, res );
    } ).resume();
    
    //res.writeHead(200, {'Content-Type': 'text/html'});
    
    //res.write(req.url);
    
    //res.end('<h1> Hello </h1>\n');
    
}).listen(process.env.PORT, process.env.IP);

