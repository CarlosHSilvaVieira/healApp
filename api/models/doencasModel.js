var GeoJSON = require('mongoose-geojson-schema');
var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var DoencaSchema = new Schema({
    codigo: ObjectId,
    nome:{
        type: String,
        required: 'Entre com o nome popular da doença'
    },
    nomeCientifico:{
        type: String,
        required: 'Entre com o nome cientifico da doença'
    },
    localizacao: mongoose.Schema.Types.Polygon
});

module.exports = mongoose.model('Doencas', DoencaSchema);