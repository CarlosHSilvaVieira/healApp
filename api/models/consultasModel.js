var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;


var ConsultasSchema = new Schema({
    detalhes: {
        type: String,
        required: 'Entre a receita da consulta'
    },
    local: {
        type: String,
        required: 'Entre o local da consulta'
    },
    data: {
        type: Date,
        default: Date.now
    },
    doencas: {
        type: [{ type: mongoose.Schema.ObjectId, ref: 'Doencas'}],
    },
    remedios: {
        type: [{ type: mongoose.Schema.ObjectId, ref: 'Remedios'}],
    },
    medico: { 
        type: mongoose.Schema.ObjectId, 
        ref: 'Medicos'
    }, 
    paciente: {
        type: mongoose.Schema.ObjectId,
        ref: 'Pacientes'
    }
});

module.exports = mongoose.model("Consultas", ConsultasSchema);