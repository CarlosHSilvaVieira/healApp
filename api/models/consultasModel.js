var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;


var ConsultasSchema = new Schema({
    codigo: ObjectId,
    receita: {
        type: String,
        required: 'Entre a receita da consulta'
    },
    data: {
        type: Date,
        default: Date.now
    },
    doenca: {
        type: mongoose.Schema.ObjectId,
        ref: 'Doencas'
     },
    medico: {
        type: mongoose.Schema.ObjectId,
        ref: 'Medicos'
     }
});

module.exports = mongoose.model("Consultas", ConsultasSchema);