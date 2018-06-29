const express = require('express');

let app = express();

let languages = [
    {
        id: 1,
        name: 'HTML'
    },
    {
        id: 2,
        name: 'CSS'
    },
    {
        id: 3,
        name: 'JS'
    },
    {
        id: 4,
        name: 'PYTHON'
    },
];

app.get('/', function (req, res) {
    res.send('HelloApi');
});

app.get('/languages', function (req,res) {
    res.send(languages);
});

app.get('/languages/:id', function (req,res) {
    console.log(req.params);
    let language = languages.find(function (lang) {
        return lang.id === Number(req.params.id);
    });
    res.send(language);
});

app.get('/languages/name/:name', function (req,res) {
    console.log(req.params);
    let language = languages.find(function (lang) {
        return lang.name === (req.params.name);
    });
    res.send(language);
});

app.listen(3012, function () {
    console.log(('API app started'));
});
