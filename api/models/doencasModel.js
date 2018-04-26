var GeoJSON = require('mongoose-geojson-schema');
var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var DoencaSchema = new Schema({
    codigo: ObjectId,
    nome: {
        type: String,
        required: 'Entre com o nome popular da doença'
    },
    sintomas: {
        type: String,
        required: 'Entre com os sintomas da doença'
    },
    dataInicio:{
        type: Date,
        default: Date.now,
        required: 'Entre com a data de início dos sintomas'
    },
    dataFim: {
        type: Date,
        default: null
    },
    paciente: {
        type: mongoose.Schema.ObjectId,
        ref: 'Pacientes'
    },
    localizacao: mongoose.Schema.Types.Polygon
});

module.exports = mongoose.model('Doencas', DoencaSchema);