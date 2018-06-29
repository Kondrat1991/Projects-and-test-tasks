let express = require('express');
let bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let artists = [
    {
        id: 1,
        name: 'Metallica',
        age: 35,
        style: "First"
    },
    {
        id: 2,
        name: 'Iron Maiden',
        age: 30,
        style: "Second"
    },
    {
        id: 3,
        name: 'Deep Purple',
        age: 25,
        style: "Third"
    }
];

app.get('/', function (req, res) {
    res.send('Hello API');
});

app.get('/artists', function (req, res) {
    res.send(artists);
});

app.get('/artists/:id', function (req, res) {
    console.log(req.params);
    let artist = artists.find(function (artist) {
        return artist.id === Number(req.params.id)
    });
    res.send(artist);
});

app.post('/artists', function (req, res) {
    let artist = {
        id: Date.now(),
        name: req.body.name
    };
    artists.push(artist);
    res.send(artist);
});

app.put('/artists/:id', function (req, res) {
    let artist = artists.find(function (artist) {
        return artist.id === Number(req.params.id)
    });
    artist.name = req.body.name;
    res.sendStatus(200);
});

app.delete('/artists/:id', function (req, res) {
    artists = artists.filter(function (artist) {
        return artist.id !== Number(req.params.id);
    });
    res.sendStatus(200);
});

app.patch('/artists/:id', function (req, res) {
    let artist = artists.find(function (artist) {
        return artist.id === +req.params.id;
    });
    artist.style = req.body.style;
    res.sendStatus(200);
    //res.send(artist);
});

app.listen(3012, function () {
    console.log('API app started');
});
