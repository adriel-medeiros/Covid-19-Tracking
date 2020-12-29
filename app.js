const express = require('express')
const app = express();
const moment = require('moment')

//require('./routes')(app)

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

//app.use(bodyParser.urlencoded({extended: true}));
//app.use(bodyParser.json());

const homeController = require('./controllers/homeController')
app.use(express.static('public'))
app.get('/home', homeController.homeController);


app.listen(3000, () => console.log("it worked. listening at 3000"));
