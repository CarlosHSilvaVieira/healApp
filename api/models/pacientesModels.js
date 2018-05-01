var GeoJSON = require('mongoose-geojson-schema');
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Pacientes = new Schema({
    nome:{
        type: String
    },
    cpf: {
        type: String
    },
    peso: {
        type: Number
    },
    altura:{
        type: Number
    },
    enderecos: {
        type: [{
            logradouro: String,
            numero: Number,
            complememto: String,
            bairro: String,
            cep: Number,
            cidade: String,
            estado: String,
            nacao: String,
            localizacao: mongoose.Schema.Types.Point
        }]
    },
    email: {
        type: String,
        required: "Entre com o email"
    },
    senha:{
        type: String,
        required: "senha é necessária"
    }
});

module.exports = mongoose.model("Pacientes", Pacientes);