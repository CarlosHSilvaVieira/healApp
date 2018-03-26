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
            bairro: String,
            cidade: String,
            estado: String,
            nacao: String,
            localizacao: mongoose.Schema.Types.Point
        }]
    },
    carteirinha:{
        type: Number
    },
    vacinas: {
        type: [{
            type: mongoose.Schema.ObjectId,
            ref: 'Vacinas'
        }]
    },
    doencas: {
        type: [{
            type: mongoose.Schema.ObjectId,
            ref: 'Doencas'
        }]
    },
    remedios: {
        type: [{
            type: mongoose.Schema.ObjectId,
            ref: 'Remedios'
        }]
    },
    consultas: {
        type: [{
            type: mongoose.Schema.ObjectId,
            ref: 'Consultas'
        }]
    },
    monitoramentos:{
        type: mongoose.Schema.ObjectId,
        ref: 'Monitoramentos'
    }
});

module.exports = mongoose.model("Pacientes", Pacientes);