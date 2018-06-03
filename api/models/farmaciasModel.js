var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var farmaciaSchema = new Schema({
    lat: {
        type: Number
    },
    long: {
        type: Number
    },
    nu_ddd_farmacia: {
        type: Number
    },
    nu_telefone_farmacia: {
        type: Number
    },
    nu_cep_farmacia: {
        type: Number
    },
    no_bairro_farmacia: {
        type: String
    },
    ds_endereco_farmacia: {
        type: String
    },
    no_farmacia: {
        type: String
    },
    no_cidade: {
        type: String
    },
    uf: {
        type: String
    },
    latlong: {
        type: Object,
        latitude: this.lat,
        longitude: this.long
    },
    localizacao: {
        type: mongoose.Schema.Types.Point,
        coordinates: [this.lat, this.long]
    }
});

//localizacao: mongoose.Schema.Types.Point

module.exports = mongoose.model("Farmacias", farmaciaSchema, 'farmacias');