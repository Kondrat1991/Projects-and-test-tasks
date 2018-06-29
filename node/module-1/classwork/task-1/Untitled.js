// console.log(('Hi node'));

// const fs = require('fs');
//
// fs.readFile('hello.txt', 'utf8', (error, content) =>
//     content
//         .split('\n')
//         .filter(line => line.includes('dog'))
//         .forEach(line => console.log(line))
// );

// const fs = require('fs');
// let txt = fs.readFileSync('hello.txt', 'utf-8');
//
// let txt_write = 'Hello world!' + '/n' + txt;
// fs.writeFileSync('some_text.txt', txt_write);
/*
 const fs = require('fs');

function stats (file) {
    return new Promise((resolve, reject) => {
        fs.stat(file, (err, data) => {
            if (err) {
                return reject (err)
            }
            resolve(data)
        })
    })
}

Promise.all([
    stats('file1'),
    stats('file2'),
    stats('file3')
])
    .then((data) => console.log(data))
    .catch((err) => console.log(err));*/
//
// const http = require('http');
// const port = 3000;
//
// const requestHandler = (request, response) => {
//     console.log(request.url);
//     response.end('Hello Node.js Server!')
// }
//
// const server = http.createServer(requestHandler);
//
// server.listen(port, (err) => {
//     if (err) {
//         return console.log('something bad happened', err)
//     }
//
//     console.log(`server is listening on ${port}`)
// });
//
// const http = require('http');
// const port = 3000;
//
// const requestHandler = (request,response) => {
//
// }
//
// var http = require('http');
// var fs = require('fs');

// function onRequest(request, response) {
//     response.writeHead(200, {'Content-Type': 'text/html'});
//     fs.readFile('./index.html', null, function(error, data) {
//         if (error) {
//             response.writeHead(404);
//             response.write('File not found!');
//         } else {
//             response.write(data);
//         }
//         response.end();
//     });
// }
//
// http.createServer(onRequest).listen(8000);

// let http = require('http');
// let fs = require('fs');
//
// function onRequest(request,response) {
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//     fs.readFile('./index.html', null, function (error, data) {
//         if(error) {
//          response.writeHead(404);
//          response.write('File not found');
//         }
//         else {
//             response.write(data);
//         }
//         response.end();
//         })
// };
//
// http.createServer(onRequest).listen(8080);



