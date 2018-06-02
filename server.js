var express = require("express");
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var port = process.env.port || 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Healapp');

// Criando as tabelas

var doencasModel = require('./api/models/doencasModel'),
medicosModel = require('./api/models/medicosModel'),
monitoramentosModel = require('./api/models/monitoramentosModel'),
remediosModel = require('./api/models/remediosModel'),
vacinasModel = require('./api/models/vacinasModel'),
consultasModel = require('./api/models/consultasModel'),
pacientesModel = require('./api/models/pacientesModels'),
geocentrosModel = require('./api/models/geocentrosModel');

// Fazendo com que as requisições recebidas sejam JSON
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Habilitando as rotas

var consultasRoute = require('./api/route/consultasRoute');
doencasRoute = require('./api/route/doencasRoute'),
medicosRoute = require('./api/route/medicosRoute'),
monitoramentosRoute = require('./api/route/monitoramentosRoute'),
pacientesRoute = require('./api/route/pacientesRoute'),
remediosRoute = require('./api/route/remediosRoute'),
vacinasRoute = require('./api/route/vacinasRoute'),
centrosRoute = require('./api/route/geocentrosRoute');

centrosRoute(app);
consultasRoute(app);
doencasRoute(app);
medicosRoute(app);
monitoramentosRoute(app);
pacientesRoute(app);
remediosRoute(app);
vacinasRoute(app);

app.get('/', function (req, res)
{
    res.send("HealApp working in port " + port);
});

app.listen(port);

console.log("API healAPI funcionando na porta "+ port);
