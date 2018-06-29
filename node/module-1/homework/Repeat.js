let express = require('express');
let bodyParser = require('body-parser');

// require("style!raw!./style.css");
// require("!style!/style.css");
// require("style/url!file!/style.css");

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let books = [
    {
        id: 1,
        name: 'Physics',
        age: 35,
        style: "Sciense"
    },
    {
        id: 2,
        name: 'Kobzar',
        age: 30,
        style: "Literature"
    },
    {
        id: 3,
        name: '50 Shades of Grey',
        age: 25,
        style: "Mainstream soap"
    }
];



app.get('/', function (req, res) {
    res.sendFile(__dirname+"/index.html");
});

app.get('/portfolio', function (req, res) {
    res.sendFile(__dirname+"/portfolio.html");
});

app.get('/services', function (req, res) {
    res.sendFile(__dirname+"/services.html");
});



app.get('/books', function (req, res) {
    res.send(books);
});

app.get('/books/:id', function (req, res) {
    console.log(req.params);
    let book = books.find(function (book) {
       return book.id === Number(req.params.id);
   });
    console.log(book);
   res.send(book);
});

app.post('/books', function (req, res) {
    let book = {
        id: Date.now(),
        name: req.body.name,
        age: 46,
        style: 'not bad'
    };
    books.push(book);
    res.send(book);
});

app.put('/books/:id', function (req, res) {
    let book = books.find(function (book) {
        return book.id === Number(req.params.id)
    });
    book.name = req.body.name;
    res.sendStatus(200);
});

app.delete('/books/:id', function (req,res) {
books = books.filter(function (book) {
    return book.id !== Number(req.params.id);
});
res.sendStatus(200)
});

app.patch('/books/:id', function (req, res) {
    let book = books.find(function (book) {
        return book.id === +req.params.id;
    });
    book.style = req.body.style;
    res.sendStatus(200);
});

// app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));


app.listen(3012, function () {
    console.log('API app started');
});

// res.sendFile(__dirname+"index.html");

