let Card = require('/app/models/card');
let mongoose = require('mongoose');
 // mongoose.connect('localhost:27017/server');
// mongoose.connect('mongodb://localhost/mongoose_basics');
let Schema = mongoose.Schema;
let router = express.Router();


mongoose.connect('mongodb://localhost/mongoose_basics', function (err) {

    if (err) throw err;

    console.log('Successfully connected');

});

router.get('/', function(req, res, next) {
    res.render('index');
});

let firstCard = new Card({
    name: original,
    href: "https://www.google.com.ua/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwinzoCwteLbAhUyiKYKHRlDD2EQjRx6BAgBEAU&url=https%3A%2F%2Fwww.decorprint.com.ua%2Ffotoshpalery_kolir%2Ffioletovyj%2F&psig=AOvVaw0VxlE2VTuw8Ezx5vEoLc9e&ust=1529590104639351",
    email: 'Dudeman@gmail.com'
});

newCard.save(function (err) {
    if (err) throw err;

    console.log("Card saved succesfully");
});

















