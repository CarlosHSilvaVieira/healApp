var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VacinasSchema = new Schema({
    nome: {
        type: String,
        required: 'Entre com o nome da vacina'
    },
    data: {
        type: Date,
        default: Date.now
    },
    reforco: {
        type: Boolean,
        default: false
    },
    dataReforco: {
        type: Date,
        default: null
    },
    paciente: {
        type: mongoose.Schema.ObjectId,
        ref: 'Pacientes'
    }
});

module.exports = mongoose.model("Vacinas", VacinasSchema);