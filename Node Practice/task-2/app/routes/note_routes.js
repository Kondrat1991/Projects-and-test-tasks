
let ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
    /*app.get('/notes/:id', (req,res) => {
        const id = req.params.id;
     const details = { '_id': new ObjectID(id) }
     db.collection('notes').findOne(details, (err,item) => {
         if (err) {
             res.send({'error': 'error occured'});
         }
         else {
             res.send(item);
         }
     });
    });*/

    app.get('/', function (req, res,next) {
        let coll = db.collection('notes');
        console.log('coll',coll);
        coll.find({}).toArray(function (err, result) {
            if (err) {
                res.send(err);
            } else {

                res.send(JSON.stringify(result));
            }
        })
    });



    app.post('/notes', (req, res) => {
        const note = { text: req.body.body, title: req.body.title };
        db.collection('notes').insert(note, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(result.ops[0]);
            }
        });
    });
    app.delete('/notes/:id', (req,res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('notes').remove(details, (err,item) => {
            if(err) {
                res.send({'error':'An error has occured'});
            }
            else {
                res.send('Note' + id + 'deleted!');
            }
        })
    });

    app.put('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        const note = { text: req.body.body, title: req.body.title };
        db.collection('notes').update(details, note, (err, result) => {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send(note);
            }
        });
    });
};

