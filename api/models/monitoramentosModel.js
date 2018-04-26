var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Monitoramento = new Schema({
    codigo: ObjectId,
    batimentos: {
        type: [{
            valor: Number,
            data: {
                type: Date,
                default: Date.now
            }
        }]
    },
    calorias:{
        type: [{
            valor: Number,
            data: {
                type: Date,
                default: Date.now
            }
        }]
    },
    velocidade:{
        type: [{
            valor: Number,
            data: {
                type: Date,
                default: Date.now
            }
        }]
    },
    passos:{
        type: [{
            valor: Number,
            data: {
                type: Date,
                default: Date.now
            }
        }]
    },
    sono: {
        type: [{
            valor: Number,
            data: {
                type: Date,
                default: Date.now
            }
        }]
    },
    paciente: {
        type: mongoose.Schema.ObjectId,
        ref: 'Pacientes'
    }
});

module.exports = mongoose.model("Monitoramentos", Monitoramento);