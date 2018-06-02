var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var geoCentros = new Schema({
    vlr_latitude: {
        type: Number
    },
    vlr_longitude: {
        type: Number
    },
    cod_munic: {
        type: Number
    },
    cod_cnes: {
        type: Number
    },
    nom_estab: {
        type: String
    },
    dsc_endereco: {
        type: String
    },
    dsc_bairro: {
        type: String
    },
    dsc_cidade: {
        type: String
    },
    dsc_telefone: {
        type: String
    },
    dsc_estrut_fisic_ambiencia: {
        type: String
    },
    dsc_adap_defic_fisic_idosos: {
        type: String
    },
    dsc_equipamentos: {
        type: String
    },
    dsc_medicamentos: {
        type: String
    },
    localizacao: {
        type: mongoose.Schema.Types.Point,
        coordinates: [this.vlr_longitude, this.vlr_latitude]
    }
});

//localizacao: mongoose.Schema.Types.Point

module.exports = mongoose.model("Geocentros", geoCentros, 'geocentros');